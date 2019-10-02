import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SubHeadlineText } from '../Typography';
import { Container, Section } from './styles';
import { getOrderStatusByCode } from '../../utils/getOrderStatus';
import CustomerInfo from './CustomerInfo';
import OrderItems from './OrderItems';
import OrderActions from './OrderActions';

const OrderDetails = ({ order }) => {
  const {
    customer,
    items = [],
    discount,
    totalToPay,
    status,
  } = order || {};
  const [selected, setSelected] = useState(getOrderStatusByCode(status));

  useEffect(() => {
    setSelected(getOrderStatusByCode(status));
  }, [order]);

  return (
    <Container>
      <SubHeadlineText>Detalhes</SubHeadlineText>
      <Section hasOrder={order}>
        {order && (
          <>
            <CustomerInfo customer={customer} />
            <OrderItems
              items={items}
              discount={discount}
              totalToPay={totalToPay}
            />
            <OrderActions order={order} optionSelected={selected} setSelected={setSelected} />
          </>
        )}
      </Section>
    </Container>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.shape(),
};

OrderDetails.defaultProps = {
  order: {},
};

export default OrderDetails;
