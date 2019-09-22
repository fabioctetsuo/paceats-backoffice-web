import styled from 'styled-components';
import { Container, Col } from 'react-awesome-styled-grid';

export const CustomCol = styled(Col)`
  padding: 12px;
`;

export const CustomGrid = styled(Container)`
  @media (min-width: 769px) {
    margin-bottom: 50px;
  }
`;
