import React, { Component } from 'react';
import PropTypes from 'prop-types';
import http from '../../server';
import { message } from 'antd';
import './index.css';

class Content extends Component { 

  state = {
    typeList:[]
  }

  componentWillMount() {
    http.get('cms/category/list')
    .then(res => {
      if(res.code !== 0){
        message.error(res.message)
        return
      }
      this.setState({
        typeList: res.data
      });
    });
  }

  render(){
    const { typeList } = this.state;

    return(
      <div className='homeContent'>
        <h1 className='contentTitle'>Live Long and Code</h1>
        <ul className='typeContainer'>
          {
            typeList.map((item,index) => (
              <li className='typeList' key={ index }><a href={ item.remark }>{ item.name }</a></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

Content.propTypes = {
  typeList: PropTypes.array
}


export default Content;