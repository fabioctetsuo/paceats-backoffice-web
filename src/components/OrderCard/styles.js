import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border-radius: 8px;
  border: none;
  margin: 16px 16px 0 16px;
  padding: 8px;
  background: #ffffff;
  justify-content: space-between;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  transition: background 0.2s;
  width: calc(100% - 32px);
  outline: none;

  &:hover {
    background: #f6f6f6;
  }

  &:active {
    background: #f3f3f3;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 14px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const OrderHour = styled.div`
  font-size: 12px;
`;

export const OrderNumber = styled.div`
  font-size: 12px;
`;

export const Badge = styled.div`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: ${({ status }) => (status && status.background) || '#333'}
  color: ${({ status }) => (status && status.color) || '#000'}
`;
