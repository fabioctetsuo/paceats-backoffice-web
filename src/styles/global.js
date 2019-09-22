import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #EEEEEE;

    #app {
      height: 100%;
    }
  }
`;
export default GlobalStyle;
