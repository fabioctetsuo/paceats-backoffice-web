import React from 'react';
import PropTypes from 'prop-types';
import { SubHeadlineText } from '../Typography';
import { Customer, Wrapper, TextDetails } from './styles';

const CustomerInfo = ({ customer }) => (
  <Customer>
    <Wrapper>
      <SubHeadlineText>Cliente</SubHeadlineText>
      <TextDetails>
        Nome: {customer.firstName} {customer.lastName}
      </TextDetails>
    </Wrapper>
  </Customer>
);

CustomerInfo.propTypes = {
  customer: PropTypes.shape().isRequired,
};

export default CustomerInfo;
