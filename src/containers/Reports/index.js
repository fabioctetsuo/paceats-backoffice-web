import React, { useEffect } from 'react';
import ReactTable from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-awesome-styled-grid';
import 'react-table/react-table.css';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { SubHeadlineText } from '../../components/Typography';

import { formatMoney } from '../../utils/currencyFormatter';
import { ORDER_CODE } from '../../utils/getOrderStatus';
import { ActionCreators as OrderActions } from '../../store/ducks/orders';
import { CustomCol, CustomSubHeadline } from './styles';

// eslint-disable-next-line arrow-body-style
const getFinishedOrders = (orders = []) => {
  return orders.filter(({ status }) => status === ORDER_CODE.FINISHED);
};

const getDonationIntermediation = (orders) => {
  const donations = getFinishedOrders(orders).map(({ donation }) => donation && donation.quantity);
  return donations.reduce((total, num) => total + num, 0);
};

const getTotalReceivedValue = (orders) => {
  const received = getFinishedOrders(orders).map(({ totalToPay }) => totalToPay);
  return received.reduce((total, num) => total + num, 0);
};

const Reports = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ orders }) => orders);

  const columns = [
    {
      id: 'customer-name',
      Header: 'Cliente',
      accessor: ({ customer }) => `${customer.firstName} ${customer.lastName}`,
    },
    {
      id: 'organization-name',
      Header: 'Organização',
      accessor: ({ donation = {} }) => donation.ongName,
    },
    {
      id: 'paceats-intermediation-cost',
      Header: 'Custo de intermediação da Paceats',
      accessor: 'totalToPay',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => {
        const paceatsIntermediation = value * 0.2;
        const intermediationCost = paceatsIntermediation * 0.05;
        const total = paceatsIntermediation - intermediationCost;
        return <span className="number">{formatMoney(total)}</span>;
      },
    },
    {
      id: 'organization-intermediation-cost',
      Header: 'Custo de intermediação da ONG',
      accessor: 'totalToPay',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => {
        // eslint-disable-next-line react/prop-types
        const paceatsIntermediation = value * 0.2;
        const intermediationCost = paceatsIntermediation * 0.05;
        return <span className="number">{formatMoney(intermediationCost)}</span>;
      },
    },
    {
      id: 'restaurant-receipt-value',
      Header: 'Receita Líquida',
      accessor: 'totalToPay',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => {
        const paceatsIntermediation = value * 0.2;
        return <span className="number">{formatMoney(value - paceatsIntermediation)}</span>;
      },
    },
    {
      id: 'restaurant-total',
      Header: 'Receita Bruta',
      accessor: 'totalToPay',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => <span className="number">{formatMoney(value)}</span>,
    },
  ];

  useEffect(() => {
    dispatch(OrderActions.addOrderRequest());
  }, []);

  const donationIntermediation = getDonationIntermediation(data);

  return (
    <Layout sidebar>
      <Container fluid={false}>
        <Row>
          <CustomCol xs={4} sm={8} md={4} lg={4} xl={4}>
            <Card>
              <CustomSubHeadline>Pedidos Concluídos</CustomSubHeadline>
              <SubHeadlineText>{getFinishedOrders(data).length}</SubHeadlineText>
            </Card>
          </CustomCol>
          <CustomCol xs={4} sm={8} md={4} lg={4} xl={4}>
            <Card>
              <CustomSubHeadline>Valor repassado</CustomSubHeadline>
              <SubHeadlineText>{formatMoney(donationIntermediation)}</SubHeadlineText>
            </Card>
          </CustomCol>
          <CustomCol xs={4} sm={8} md={4} lg={4} xl={4}>
            <Card>
              <CustomSubHeadline>Valor ganho</CustomSubHeadline>
              <SubHeadlineText>
                {formatMoney((getTotalReceivedValue(data) - donationIntermediation))}
              </SubHeadlineText>
            </Card>
          </CustomCol>
        </Row>
        <Row>
          <CustomCol xs={4} sm={8} md={12}>
            <Card>
              <ReactTable
                data={getFinishedOrders(data)}
                columns={columns}
                showPagination={false}
                minRows={5}
                loading={loading}
                loadingText="Carregando"
              />
            </Card>
          </CustomCol>
        </Row>
      </Container>
    </Layout>
  );
};

export default Reports;
