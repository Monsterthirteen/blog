import React, { Component } from 'react';
import './index.css'

class CommentList extends Component {

  render() {
    const {commentList} = this.props.parent.state
    return (
      <div className='commentList'>
        {
          commentList.map((item, index) => (
            <div key={index}>
              <i>{item.dateAdd}</i>
              <p>{item.content}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CommentList;