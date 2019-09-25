import styled from 'styled-components';
import { Container as Grid, Row } from 'react-awesome-styled-grid';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #eeeeee;
  background-size: 30%;
`;

export const OrdersWrapper = styled.aside`
  width: 100%;
  border-right: ${({ isMobile }) => (isMobile ? 'none' : '1px solid #D0D0D0')};
  height: 100%;
  overflow: auto;
  @media (min-width: 769px) {
    width: 256px;
  }
`;

export const TitleHead = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
`;

export const CustomRow = styled(Row)`
  margin: 16px 0;
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  position: absolute;
  display: ${({ hasOrder }) => (hasOrder ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CustomGrid = styled(Grid)`
  overflow: auto;
`;
