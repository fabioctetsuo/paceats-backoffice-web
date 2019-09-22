import styled from 'styled-components';

export const Container = styled.section`
  width: auto;
  height: auto;
  margin: ${({ margin }) => (margin || '0')};
`;
