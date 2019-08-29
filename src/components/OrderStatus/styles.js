import styled from 'styled-components';
import { TextConfig } from '../Typography';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  height: 100px;
  border-radius: 8px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  box-shadow: 0px 0px 8px 0px rgba(145, 145, 145, 1);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    margin: 0 8px 0 0;
    &:last-child {
      margin: 0;
    }
  }
`;

export const CardTitle = styled(TextConfig)`
  color: #001027;
  font-size: 16px;
  letter-spacing: 0.25px;
  position: relative;
  margin: 8px 8px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 8px 0 0;
  &:last-child {
    margin: 0;
  }
`;

export const OrderNumbers = styled.p`
  color: #001027;
  font-size: 48px;
  letter-spacing: 0.5px;
  line-height: 1;
  margin: 0;
  text-align: center;
`;
