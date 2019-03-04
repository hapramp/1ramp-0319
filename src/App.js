import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './global.css';

import Home from './Pages/Home/';
import About from './Pages/About/';
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
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
          </Switch>
          {/* <Route path="/users/" component={Users} /> */}
        </Router>
        <Footer />
      </main>
    );
  }
}

export default App;
