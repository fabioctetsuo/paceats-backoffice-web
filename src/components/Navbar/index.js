import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SvgIcon from '../SvgIcon';
import { logout } from '../../services/authentication';
import { colors } from '../../styles/colors';
import { Container, MenuItem } from './styles';

const { primary } = colors.button;

const Navbar = ({ history }) => (
  <Container>
    <MenuItem
      onClick={(e) => {
        e.preventDefault();
        history.push('/');
      }}
    >
      <SvgIcon
        icon="MENU_HOME"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        color={primary.background}
      />
      Início
    </MenuItem>
    <MenuItem
      onClick={(e) => {
        e.preventDefault();
        history.push('/orders');
      }}
    >
      <SvgIcon
        icon="LIST_ICON"
        width={32}
        height={32}
        viewBox="-6 -6 32 32"
        color={primary.background}
      />
      Pedidos
    </MenuItem>
    <MenuItem
      onClick={(e) => {
        e.preventDefault();
        history.push('/products');
      }}
    >
      <SvgIcon
        icon="GYM_INVOICES"
        width={32}
        height={32}
        viewBox="-9 -3 32 32"
        color={primary.background}
      />
      Produtos
    </MenuItem>
    <MenuItem onClick={() => logout(() => window.location.replace('/'))}>
      <SvgIcon
        icon="LOGOUT"
        width={32}
        height={32}
        viewBox="-7 -6 32 32"
        color={primary.background}
      />
      Sair
    </MenuItem>
  </Container>
);

Navbar.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Navbar);
