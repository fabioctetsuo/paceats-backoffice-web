import styled from 'styled-components';
import { HeadlineText, SubHeadlineText } from '../../components/Typography';
import loginBackground from '../../assets/images/login-background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 32px;
`;

export const LoginBackground = styled.section`
  width: 100%;
  height: 100%;
  background: url(${loginBackground}) no-repeat left;
  background-size: cover;
`;

export const CustomSubheadLine = styled(SubHeadlineText)`
  color: #fff;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: ${({ isMobileSized }) => (isMobileSized ? '16px' : '140px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1c1c1c;
  color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 0 0;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #d0d0d0;
  margin: 8px 0 0 0;
  outline: none;

  &:focus {
    border: 2px solid #33a672;
  }
`;

export const CustomButton = styled.button`
  width: 100%;
  height: 40px;
  background: #33a672;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin: 16px 0 0 0;
  outline: none;
  border-radius: 8px;
  padding: 8px 0;
  font-weight: bold;
  color: #fff;
  line-height: 1.25;
  font-size: 16px;

  &:hover {
    background: #41cc8d;
  }

  &:active {
    background: #277a55;
  }
`;

export const CustomHeadline = styled(HeadlineText)`
  color: #fff;
`;
