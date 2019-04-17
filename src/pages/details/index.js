import React, { Component } from 'react';
import http from '../../server';
import { Header } from '../../components';
import { message } from 'antd';
import moment from 'moment';
import './index.css';

class Details extends Component {

  state = {
    details: {}
  }

  componentWillMount() {
    http.get('cms/news/detail',{
      id: this.props.match.params.id
    })
    .then(res => {
      if(res.code !== 0){
        message.error(res.message)
        return
      }
      res.data.dataAdd = moment(res.data.dataAdd).format('ll')
      this.setState({
        details: res.data
      });
    });
  }

  render(){
    const { details } = this.state;
    return(
      <div className='pageContainer'>
        <Header/>
        <div className='article'>
          <h1>{details.title}</h1>
          <p>{details.dataAdd}</p>
          <div dangerouslySetInnerHTML={{__html: details.content}}/>
        </div>
      </div>
    )
  }
}

export default Details;