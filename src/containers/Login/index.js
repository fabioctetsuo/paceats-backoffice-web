/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  LoginBackground,
  LoginContainer,
  InputField,
  CustomSubheadLine,
  InputContainer,
} from './styles';
import PrimaryButton from '../../components/Button/Primary';
import WindowDimensions from '../../components/WindowDimensions';
import { ActionCreators as AuthActions } from '../../store/ducks/authentication';
import { login } from '../../services/authentication';

const redirectUser = (data, history) => {
  const { accessToken, restaurantId } = data || {};
  if (!accessToken || !restaurantId) return null;
  login(accessToken, restaurantId);
  return history.push('/orders');
};


const Login = ({ history, isMobileSized }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ authentication }) => authentication);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    redirectUser(data, history);
  }, [data]);

  return (
    <Container>
      {!isMobileSized && <LoginBackground />}
      <LoginContainer isMobileSized={isMobileSized}>
        <CustomSubheadLine>Portal do parceiro</CustomSubheadLine>
        <p>Gerencie seu restaurante de forma fácil e rápida</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(AuthActions.addAuthRequest({ email, password }));
          }}
        >
          <InputContainer>
            <label htmlFor="email">E-mail</label>
            <InputField
              id="email"
              name="email"
              placeholder="nome@email.com.br"
              value={email}
              type="email"
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Senha</label>
            <InputField
              placeholder="Insira sua senha secreta"
              value={password}
              type="password"
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <PrimaryButton
            width="100%"
            margin="32px 0 0 0"
            disabled={loading}
          >
            {loading ? 'Carregando' : 'Entrar'}
          </PrimaryButton>
        </form>
      </LoginContainer>
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  isMobileSized: PropTypes.bool.isRequired,
};

export default WindowDimensions(Login);
