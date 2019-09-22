import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 65px;
  background: #21222c;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;

export const TopWrapper = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
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
