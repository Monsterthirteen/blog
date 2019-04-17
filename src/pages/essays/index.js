import React, { Component } from 'react';
import { Header, ArticleList } from '../../components';

class Essays extends Component {
  render() {
    return(
      <div className='pageContainer'>
        <Header/>
        <ArticleList/>
      </div>
    )
  }
}

export default Essays;