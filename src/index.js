import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotronConfig';
import store from './store';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Routes from './routes';

import history from './services/history';

toast.configure();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
