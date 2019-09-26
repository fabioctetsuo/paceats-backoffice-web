import styled from 'styled-components';

export const TextConfig = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  line-height: 1.5;
  font-size: 12px;
`;

export const HeadlineText = styled(TextConfig)`
  color: #001027;
  font-size: 32px;
  letter-spacing: 0.5px;
  line-height: 1;
`;

export const SubHeadlineText = styled(TextConfig)`
  color: #001027;
  font-size: 24px;
  letter-spacing: 0.25px;
`;

export const SubTitle = styled(TextConfig)`
  color: ${({ color }) => color || '#9898A7'};
  font-size: ${({ fontSize }) => (fontSize || '12px')};
  letter-spacing: 0.41px;
  margin: ${({ margin }) => (margin || '0')};
`;

export const ButtonText = styled(TextConfig)`
  color: #41414a;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 1.29px;
`;
