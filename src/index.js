import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './config/reactotronConfig';
import store from './store';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Routes from './routes';

toast.configure();

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
