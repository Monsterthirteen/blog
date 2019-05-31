import React, { Component } from 'react';
import { HomePage, Essays, Details, Comment } from './pages';
import { Route, HashRouter as Router, Redirect} from 'react-router-dom';
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
          <Route path='/comment' component={Comment}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
