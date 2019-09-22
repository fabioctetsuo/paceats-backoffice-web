import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { Row } from 'react-awesome-styled-grid';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: 1 px solid black;
`;

export const CustomRow = styled(Row)`
  margin: 16px 0;
`;

export const CustomInput = styled(Input)`
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #d0d0d0;
  outline: none;
`;
