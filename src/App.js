import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './global.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home/';
import About from './Pages/About/';
import Communities from './Pages/Communities/';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

library.add(faChrome, faGooglePlay);

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
            <Route path="/communities/" exact component={Communities} />
          </Switch>
          <Footer />
      </main>
      </Router>
    );
  }
}

export default App;
