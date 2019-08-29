import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SvgIcon from '../SvgIcon';
import { logout } from '../../services/authentication';
import WindowDimensions from '../WindowDimensions';
import { Container, TopWrapper, MenuItem } from './styles';

const Sidebar = ({ history }) => (
  <Container>
    <TopWrapper>
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
          color="#81e398"
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
          viewBox="-6 -3 32 32"
          color="#81e398"
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
          color="#81e398"
        />
        Produtos
      </MenuItem>
    </TopWrapper>
    <MenuItem onClick={() => logout(() => window.location.replace('/'))}>
      <SvgIcon
        icon="LOGOUT"
        width={32}
        height={32}
        viewBox="-7 -6 32 32"
        color="#81e398"
      />
      Sair
    </MenuItem>
  </Container>
);

Sidebar.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default WindowDimensions(withRouter(Sidebar));
