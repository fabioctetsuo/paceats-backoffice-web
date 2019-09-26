import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  box-shadow: 0 2px 4px 0 rgba(33,54,79,0.32);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1 0 auto;
  margin: 8px 0;

  @media (min-width: 769px) {
    margin: 0;
  }
`;
