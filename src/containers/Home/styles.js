import styled from 'styled-components';
import { Row } from 'react-awesome-styled-grid';
import { SubTitle } from '../../components/Typography';
import homeBackground from '../../assets/images/home-background.jpg';

export const CustomRow = styled(Row)`
  box-sizing: border-box;
  margin: 40px 0;
`;

export const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  background: url(${homeBackground}) no-repeat left;
  background-size: cover;
  overflow: auto;
  height: calc(100% - 55px);

  @media (min-width: 769px) {
    height: 100%;
    width: calc(100% - 65px);
    margin-bottom: 0;
  }
`;

export const Welcome = styled.h1`
  font-size: 34px;
  line-height: 1.25;
  font-family: sans-serif;

  @media (min-width: 769px) {
    width: 480px;
  }
`;

export const CustomSubtitle = styled(SubTitle)`
  @media (min-width: 769px) {
    width: 480px;
  }
`;

export const ImageCard = styled.img`
  align-self: center;
  height: 156px;
  width: 120px;
  height: 120px;
`;

ImageCard.displayName = 'ImageCard';
