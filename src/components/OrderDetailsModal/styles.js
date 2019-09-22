import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  overflow: auto;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 0 16px 0;
`;

export const Customer = styled.section`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #D0D0D0;
  padding: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    border-bottom: none;
    border-right: 1px solid #D0D0D0;
  }
`;

export const OrderItems = styled.section`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const TextDetails = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

export const Close = styled.button`
  display: flex;
  justify-content: center;
  width: 40px;
  min-height: 40px;
  border-radius: 50%;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`;
