import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 15px;
  }

  a {
    text-decoration: none;
  }

  h1, 
  h2 {
    margin: 0;
    padding: 0;
    color: #FF6060;
    font-weight: 300;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 18px;
  }
`;
 
export default GlobalStyles;