import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from './contrainers/LoginPage/LoginPage'
import NavBar from './contrainers/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/forgetpassword" component={NavBar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
