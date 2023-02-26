import React from 'react'
import GlobalStyle from './globalStyles'
import Roads from './router/Roads'
import styled from 'styled-components'
import { device } from './device'

const Container = styled.div`
    margin: auto;
    @media ${device.mobileS} { 
        max-width: 320px;
    }
    @media ${device.mobileM} { 
        max-width: 375px;
    }
    @media ${device.mobileL} { 
        max-width: 425px;
    }
    @media ${device.tablet} { 
        max-width: 768px;
    }
    @media ${device.laptop} { 
        max-width: 1024px;
    }
    @media ${device.laptopL} { 
        max-width: 1240px;
    }
`

function App() {
	return (
    <Container>
        <GlobalStyle />
		    <Roads />
    </Container>  
	);
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/