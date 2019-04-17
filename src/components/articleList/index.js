import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import http from '../../server';
import { message } from 'antd';
import moment from 'moment';
import './index.css'

class ArticleList extends Component {

  state = {
    list: []
  }

  componentWillMount() {
    http.get('cms/news/list',{
      categoryId: 0
    })
    .then(res => {
      if(res.code !== 0) {
        message.error(res.message)
        return
      }
      const data = res.data
      data.forEach(item => {
        item.dataAdd = moment(item.dataAdd).format('ll')
      })
      this.setState({
        list: data
      });
    });
  }

  render() {

    const { list } = this.state;

    return(
      <div className='listContainer'>
        <ul>
          {
            list.map((item,index) => (
              <li key={ index }>
                <span>{ item.dataAdd }</span>
                <Link to={`/details/${item.id}`}>{ item.title }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

ArticleList.propTypes = { 
  list:PropTypes.array
}

export default ArticleList;