import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Nav from './nav/Nav'
import Content from './Content'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav />
        </header>
        <Container>
          <Content />
        </Container>
      </Router>
    </div>
  );
}

export default App;
