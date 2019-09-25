import styled from 'styled-components';
import { Col } from 'react-awesome-styled-grid';
import { colors } from '../../styles/colors';

const { primary } = colors.button;

export const CustomCol = styled(Col)`
  padding: 12px;
`;

export const NewProductButton = styled.button`
  width: 100%;
  height: 40px;
  background: ${primary.background};
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin: 16px 0 0 0;
  outline: none;
  border-radius: 20px;
  padding: 8px 0;
  font-weight: bold;
  color: ${primary.color};
  line-height: ${primary.lineHeight};
  letter-spacing: ${primary.letterSpacing};
  font-size: ${primary.fontSize};

  &:hover {
    background: ${primary.hover};
  }

  &:active {
    background: ${primary.click};
  }

  @media (min-width: 769px) {
    width: auto;
    padding: 8px 32px;
  }
`;
