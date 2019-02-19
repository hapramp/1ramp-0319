import React, { Component } from 'react';
import logo from './logo.svg';
import './global.css';

import Home from './Pages/Home/';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

library.add(faChrome, faGooglePlay);

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    );
  }
}

export default App;
