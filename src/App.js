import React from "react"
import GlobalStyle from './globalStyles';
import Roads from './router/Roads'

import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
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