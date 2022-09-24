import React from 'react';

import '../Component-style/CssReset.css';
import '../Component-style/App.css';

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js';

import '../custom.scss'





class App extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}


export default App;
