import { createGlobalStyle }  from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  body {
    background: #7f00ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #7f00ff, #e100ff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #7f00ff, #e100ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
