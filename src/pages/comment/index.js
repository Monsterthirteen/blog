import React, { Component } from 'react';
import { Header, CommentList, CommentRelease } from '../../components';
import http from '../../server';
import moment from 'moment';

class Comment extends Component {

  state = {
    commentList: []
  }

  componentWillMount() {
    this.getList()
  }
  getList = () => {
    http.get('comment/list',{status:0})
    .then(res => {
      if(res.code === 0) {
        const data = res.data
        data.forEach(item => {
          item.dateAdd = moment(item.dateAdd).format('ll HH:mm')
        })
        this.setState({
          commentList: data,
        });
      }
    });
  }
  render() {
    const props = {
      parent: this,
      ...this.props
    }
    return (
      <div className='pageContainer'>
        <Header/>
        <CommentList {...props}/>
        <CommentRelease {...props}/>
      </div>
    )
  }
}

export default Comment;