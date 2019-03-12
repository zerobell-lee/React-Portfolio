import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Projects } from './pages';

class App extends Component {
  render() {
    return (
      <>
      <Route exact path='/' component={Home} />
      <Route exact path='/project/:id' component={Projects} />
      </>
    );
  }
}

export default App;