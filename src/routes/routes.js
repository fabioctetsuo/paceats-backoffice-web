import Login from '../containers/Login';
import Orders from '../containers/Orders';

const routes = [
  {
    path: '/login',
    navbarName: 'Portal PacEats - Faça o login para continuar',
    component: Login,
  },
  {
    path: '/orders',
    navbarName: 'Verifique os pedidos',
    component: Orders,
  },
];

export default routes;
