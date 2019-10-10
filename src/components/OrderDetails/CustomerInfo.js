import React from 'react';
import PropTypes from 'prop-types';
import { SubHeadlineText } from '../Typography';
import { Customer, Wrapper, TextDetails } from './styles';

const CustomerInfo = ({ customer, donation }) => (
  <Customer>
    <Wrapper>
      <SubHeadlineText>Informações</SubHeadlineText>
      <TextDetails>
        Cliente: {customer.firstName} {customer.lastName}
      </TextDetails>
      <TextDetails>
        Organização beneficiada: {donation.ongName}
      </TextDetails>
    </Wrapper>
  </Customer>
);

CustomerInfo.propTypes = {
  customer: PropTypes.shape().isRequired,
  donation: PropTypes.shape().isRequired,
};

export default CustomerInfo;
