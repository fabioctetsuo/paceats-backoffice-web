import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-awesome-styled-grid';
import OrderCard, { CardLoader } from '../../components/OrderCard';
import OrderDetails from '../../components/OrderDetails';
import OrderDetailsModal from '../../components/OrderDetailsModal';
import { OrderStatus } from '../../components/OrderStatus';
import Modal from '../../components/Modal';
import CustomScrollbar from '../../components/CustomScrollbar';
import WindowDimensions from '../../components/WindowDimensions';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import { SubHeadlineText } from '../../components/Typography';
import { ActionCreators as OrderActions } from '../../store/ducks/orders';
import { getOrderStatusNumbers } from '../../utils/getOrderStatus';
import {
  Container,
  OrdersWrapper,
  TitleHead,
  CustomRow,
  MobileContainer,
  CustomGrid,
} from './styles';

const handleOrderCardClick = (order, setOrder) => setOrder(order);

const filterOrders = (orders, searchValue) => orders.filter((order) => {
  if (!searchValue) return orders;
  const fullName = `${order.customer.firstName} ${order.customer.lastName}`.toLowerCase();
  return fullName.includes(searchValue.toLowerCase());
});

const Orders = ({ isMobileSized }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ orders }) => orders);
  const [ordersList, setOrdersList] = useState(null);
  const [order, setOrder] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const { received, finished, progress } = getOrderStatusNumbers(data);
  const orderStatus = [
    { title: 'Para fazer', value: received, loading },
    { title: 'Em andamento', value: progress, loading },
    { title: 'Concluídos', value: finished, loading },
  ];

  useEffect(() => {
    dispatch(OrderActions.addOrderRequest());
  }, []);

  useEffect(() => {
    const sortedOrders = data.sort((a = {}, b = {}) => a.status - b.status);
    setOrdersList(sortedOrders);
  }, [data]);

  return (
    <>
      <Modal />
      <Layout sidebar>
        <Container isMobile={isMobileSized}>
          <OrdersWrapper isMobile={isMobileSized}>
            <CustomScrollbar>
              <TitleHead>
                <SubHeadlineText>Pedidos</SubHeadlineText>
                <Search
                  value={searchValue}
                  handleCustomerSearch={(event) => setSearchValue(event.target.value)}
                  handleSubmit={(event) => {
                    event.preventDefault();
                    const filteredOrdersList = filterOrders(data, searchValue);
                    setOrdersList(filteredOrdersList);
                    setSearchValue('');
                  }}
                />
              </TitleHead>
              {loading ? (
                <CardLoader />
              ) : (
                ordersList
                && ordersList.map((o) => (
                  <OrderCard
                    key={o._id}
                    order={o}
                    handleOrderClick={() => handleOrderCardClick(o, setOrder)}
                  />
                ))
              )}
            </CustomScrollbar>
          </OrdersWrapper>
          {!isMobileSized && (
            <CustomGrid fluid={false}>
              <CustomRow>
                <Col xs={4} sm={8} md={12} lg={12} xl={12}>
                  <OrderDetails orders={data} order={order} />
                </Col>
              </CustomRow>
              <CustomRow>
                {orderStatus.map((status) => (
                  <Col xs={4} sm={8} md={4} lg={4} xl={4}>
                    <OrderStatus
                      text={status.title}
                      status={status.value}
                      loading={status.loading}
                    />
                  </Col>
                ))}
              </CustomRow>
            </CustomGrid>
          )}
          {isMobileSized && (
            <MobileContainer hasOrder={order}>
              <OrderDetailsModal
                handleCloseClick={() => setOrder(null)}
                order={order}
              />
            </MobileContainer>
          )}
        </Container>
      </Layout>
    </>
  );
};

Orders.propTypes = {
  isMobileSized: PropTypes.bool,
};

Orders.defaultProps = {
  isMobileSized: false,
};

export default WindowDimensions(Orders);
