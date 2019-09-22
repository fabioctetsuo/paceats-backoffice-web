import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import {
  Wrapper,
  CardTitle,
  Card,
  OrderNumbers,
} from './styles';

const CardLoader = () => (
  <ContentLoader
    height={50}
    width={100}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="100" height="50" />
  </ContentLoader>
);

export const OrderStatus = ({ text, status, loading }) => (
  <Wrapper>
    <CardTitle>{text}</CardTitle>
    <Card>
      {loading ? <CardLoader /> : <OrderNumbers>{status}</OrderNumbers>}
    </Card>
  </Wrapper>
);

OrderStatus.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
