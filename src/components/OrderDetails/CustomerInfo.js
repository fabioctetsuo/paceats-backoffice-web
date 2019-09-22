import React from 'react';
import PropTypes from 'prop-types';
import { SubHeadlineText } from '../Typography';
import { Customer, Wrapper, TextDetails } from './styles';

const CustomerInfo = ({ customer, deliveryAdress }) => (
  <Customer>
    <Wrapper>
      <SubHeadlineText>Cliente</SubHeadlineText>
      <TextDetails>
        Nome: {customer.firstName} {customer.lastName}
      </TextDetails>
    </Wrapper>
    <Wrapper>
      <SubHeadlineText>Endereço</SubHeadlineText>
      <TextDetails>Rua: {deliveryAdress.adress}</TextDetails>
      <TextDetails>Número: {deliveryAdress.adressNumber}</TextDetails>
      <TextDetails>Complemento: {deliveryAdress.complement}</TextDetails>
      <TextDetails>CEP: {deliveryAdress.cep}</TextDetails>
    </Wrapper>
  </Customer>
);

CustomerInfo.propTypes = {
  customer: PropTypes.shape().isRequired,
  deliveryAdress: PropTypes.shape().isRequired,
};

export default CustomerInfo;
