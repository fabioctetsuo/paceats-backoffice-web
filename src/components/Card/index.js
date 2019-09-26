import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
