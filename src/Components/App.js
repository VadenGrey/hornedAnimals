import React from 'react';

import '../Component-style/CssReset.css';
import '../Component-style/App.css';

import '../custom.scss'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js';

import { Container } from 'react-bootstrap';


class App extends React.Component {
  render() {
    return(
      <>
      <Container>
        <Header/>
      </Container>
        <Main/>
        <Container>
        <Footer/>
        </Container>
      </>
    );
  }
}


export default App;
