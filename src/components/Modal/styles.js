import styled from 'styled-components';

export const ModalText = styled.h6`
  font-family: 'Open sans', sans-serif;
  font-size: 14px;
  color: #101010;
`;

export const ModalActions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Confirmation = styled.button`
  padding: 8px 16px;
  background: #5dc75f;
  color: #fff;
  font-size: 14px;
  border-radius: 8px;
`;

export const Decline = styled.button`
  padding: 8px 16px;
  background: #d4635b;
  color: #fff;
  font-size: 14px;
  border-radius: 8px;
`;
