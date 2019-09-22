import styled from 'styled-components';
import { SubHeadlineText } from '../../components/Typography';
import loginBackground from '../../assets/images/login-background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
  margin: 8px 0 0 0;
  font-size: 12px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #d0d0d0;
  margin: 8px 0 0 0;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 2px solid #33a672;
  }
`;
