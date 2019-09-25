import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const { secondary } = colors.button;

export default styled.button`
  width: 100%;
  height: 40px;
  background: ${({ background }) => (background || secondary.background)};
  border: ${({ border }) => (border || 'none')};
  cursor: pointer;
  transition: background 0.2s;
  margin: ${({ margin }) => (margin || '0')};
  outline: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  color: ${({ color }) => (color || secondary.color)};
  line-height: ${({ lineHeight }) => (lineHeight || secondary.lineHeight)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing || secondary.letterSpacing)};
  font-size: ${({ fontSize }) => (fontSize || secondary.fontSize)};
  box-shadow: ${({ boxShadow }) => (boxShadow || secondary.boxShadow)};
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background: ${({ hover }) => (hover || secondary.hover)};
  }

  &:active {
    background: ${({ active }) => (active || secondary.click)};
  }

  &:disabled {
    background: ${secondary.disabled};
    color: ${secondary.disabledColor};
  }

  @media (min-width: 769px) {
    width: ${({ width }) => (width || 'auto')}
  }
`;
