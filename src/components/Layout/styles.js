import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ sidebarOpen }) => (sidebarOpen ? 'row' : 'column')};
  width: 100%;
  height: 100%;
`;

export const Content = styled.section`
  width: 100%;
  overflow: auto;
  height: ${({ isMobileSized }) => (isMobileSized ? 'calc(100% - 55px)' : '100%')};
  margin: ${({ isMobileSized }) => (isMobileSized ? '0' : '0 0 0 65px')};
`;
