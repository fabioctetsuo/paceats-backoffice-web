import styled from 'styled-components';
import emptyState from '../../assets/images/svg/emptyState.svg';

export const Container = styled.div`
  min-height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 0 16px 0;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  border-radius: 8px;
  background: ${({ hasOrder }) => (!hasOrder ? `#fff url(${emptyState}) no-repeat center` : '#fff')};
  background-size: 30%;
  padding: 16px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Customer = styled.section`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d0d0d0;
  padding: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    border-bottom: none;
    border-right: 1px solid #d0d0d0;
  }
`;

export const OrderItems = styled.section`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const OrderPayment = styled.section`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d0d0d0;
  padding: 16px;

  @media (min-width: 769px) {
    border-bottom: none;
    border-left: 1px solid #d0d0d0;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
`;

export const ItemWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

export const TextDetails = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

export const OrderActions = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d0d0d0;

  @media (min-width: 769px) {
    border-top: none;
    border-left: 1px solid #d0d0d0;
  }
`;

export const ActionsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
