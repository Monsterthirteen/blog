import React, { Component } from 'react';
import { Header, Content } from '../../components';

class HomePage extends Component {
  render() {
    return(
      <div className='pageContainer'>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default HomePage;