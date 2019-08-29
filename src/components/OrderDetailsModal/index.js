import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import { SubHeadlineText } from '../../components/Typography';
import {
  Container,
  Customer,
  Wrapper,
  TextDetails,
  OrderItems,
  Close,
} from './styles';

const OrderDetailsModal = ({ order, handleCloseClick }) => {
  if (!order) return null;
  const { customer, deliveryAdress } = order || {};
  return (
    <Container>
      <Close onClick={handleCloseClick}>
        <SvgIcon
          icon="CLOSE_ICON"
          width={16}
          height={16}
          viewBox="0 0 16 16"
        />
      </Close>
      <Customer>
        <Wrapper>
          <SubHeadlineText>Cliente</SubHeadlineText>
          <TextDetails>Nome: {customer.firstName} {customer.lastName}</TextDetails>
        </Wrapper>
        <Wrapper>
          <SubHeadlineText>Endereço</SubHeadlineText>
          <TextDetails>Rua: {deliveryAdress.address}</TextDetails>
          <TextDetails>Número: {deliveryAdress.addressNumber}</TextDetails>
          <TextDetails>Complemento: {deliveryAdress.complement}</TextDetails>
          <TextDetails>CEP: {deliveryAdress.cep}</TextDetails>
        </Wrapper>
      </Customer>
      <OrderItems>
        <SubHeadlineText>Items</SubHeadlineText>
        {order.items.map(item => (
          <TextDetails>
            {item.quantity}x - {item.name}
          </TextDetails>
        ))}
      </OrderItems>
    </Container>
  );
}

export default OrderDetailsModal;
