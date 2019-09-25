import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const { primary } = colors.button;

export default styled.button`
  width: 100%;
  height: 40px;
  background: ${({ background }) => (background || primary.background)};
  border: ${({ border }) => (border || 'none')};
  cursor: pointer;
  transition: background 0.2s;
  margin: ${({ margin }) => (margin || '0')};
  outline: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  color: ${({ color }) => (color || primary.color)};
  line-height: ${({ lineHeight }) => (lineHeight || primary.lineHeight)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing || primary.letterSpacing)};
  font-size: ${({ fontSize }) => (fontSize || primary.fontSize)};
  box-shadow: ${({ boxShadow }) => (boxShadow || primary.boxShadow)};
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background: ${({ hover }) => (hover || primary.hover)};
  }

  &:active {
    background: ${({ active }) => (active || primary.click)};
  }

  &:disabled {
    background: ${primary.disabled};
    color: ${primary.disabledColor};
  }

  @media (min-width: 769px) {
    width: ${({ width }) => (width || 'auto')}
  }
`;
