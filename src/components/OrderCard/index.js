import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ContentLoader from 'react-content-loader';
import { getOrderStatusByCode } from '../../utils/getOrderStatus';
import {
  Container,
  Details,
  Name,
  Status,
  OrderNumber,
  OrderHour,
  Badge,
} from './styles';

const OrderCard = ({ order, handleOrderClick }) => {
  const {
    orderCode,
    creationDate,
    customer,
    status,
  } = order;
  const orderStatus = getOrderStatusByCode(status);
  return (
    <Container onClick={handleOrderClick}>
      <Details>
        <OrderNumber>#{orderCode}</OrderNumber>
        <OrderHour>{moment(creationDate).format('HH:mm')}</OrderHour>
      </Details>
      <Name>
        {customer.firstName} {customer.lastName}
      </Name>
      <Status>
        <Badge status={orderStatus}>{orderStatus.label}</Badge>
      </Status>
    </Container>
  );
};

export const CardLoader = () => (
  <ContentLoader
    height={348}
    width={250}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="16" y="16" rx="5" ry="5" width="218" height="100" />
    <rect x="16" y="132" rx="5" ry="5" width="218" height="100" />
    <rect x="16" y="248" rx="5" ry="5" width="218" height="100" />
  </ContentLoader>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderCode: PropTypes.number,
    creationDate: PropTypes.string,
    customer: PropTypes.shape,
    status: PropTypes.number,
  }).isRequired,
  handleOrderClick: PropTypes.func.isRequired,
};

export default OrderCard;
