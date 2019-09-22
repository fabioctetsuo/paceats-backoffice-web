import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background: #21222c;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.button`
  width: 100%;
  height: auto;
  border: none;
  background: none;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  color: #81e398;
  font-size: 10px;
  font-family: 'Open sans', sans-serif;
  transition: background 0.2s;
  &:hover {
    background: #313341;
  }
`;
