import { createGlobalStyle } from 'styled-components'
import { device } from './device'
 
const GlobalStyles = createGlobalStyle`
  body {
    margin: auto;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    @media ${device.mobileS} { 
        width: 100%;
    }
    @media ${device.mobileM} { 
        width: 100%;
    }
    @media ${device.mobileL} { 
        width: 100%;
    }
    @media ${device.laptop} { 
        width: 100%;
    }
    @media ${device.laptopL} { 
        width: 100%;
    }
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
    @media ${device.mobileS} { 
      font-size: 23px;
    }
    @media ${device.mobileM} { 
      font-size: 23px;
    }
    @media ${device.mobileL} { 
      font-size: 23px;
    }
    @media ${device.laptop} { 
      font-size: 36px;
    }
    @media ${device.laptopL} { 
      font-size: 36px;
    }
  }

  h2 {
    font-size: 18px;
  }
`;
 
export default GlobalStyles;