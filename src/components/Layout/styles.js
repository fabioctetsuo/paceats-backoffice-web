import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ sidebarOpen }) => (sidebarOpen ? 'row' : 'column')};
  width: 100%;
  height: 100%;
`;
