import React, { Component } from 'react';
import { HomePage, Essays, Details } from './pages';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render = {() => <Redirect to="/home" />}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/essays' component={Essays}/>
          <Route path='/details/:id' component={Details}/>
        </div>
      </Router>
    );
  }
}

export default App;
