import React, { Component } from 'react';
import { Form, Input, Button, Icon, Drawer } from 'antd';
import qs from 'qs';
import './index.css';
import http from '../../server';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class CommentRelease extends Component {

  state = {
    token: null,
    drawerVisible: false,
  }

  componentWillMount() {
    const data = qs.stringify({
      "deviceId": '1',
      "deviceName": '1',
      "mobile": '13950105765',
      "pwd": '123456'
    })
    http.post('user/m/login',data)
    .then(res => {
      this.setState({
        token: res.data.token
      })
    })
  }

  handleSubmit = (e) => {
    const { token } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const data = qs.stringify({
        content: values.comment,
        type: 0,
        token: token,
      })
      if(!err) {
        http.post('comment/add',data)
        .then( res => {
          if(res.code === 0){
            this.props.parent.getList()
            this.props.form.resetFields()
            this.setState({
              drawerVisible: false,
            })
          }
        })
      }
    })
  }

  drawerShow = () => {
    this.setState({
      drawerVisible: true
    })
  }

  drawerClose = () => {
    this.setState({
      drawerVisible: false
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='commentRelease'>
        <div className='releaseIcon' onClick={this.drawerShow}>
          <Icon type='edit' size='large' theme='twoTone'/>
        </div>
        <Drawer
          title = 'Comment'
          width = {440}
          onClose = {this.drawerClose}
          visible = {this.state.drawerVisible}
        >
          <Form onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem>
              {
                getFieldDecorator('comment', {
                  rules: [{ required: true, message: 'It can not be null' }],
                })(
                  <TextArea rows={5} placeholder='leave your comment'/>
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary' size='large' htmlType='submit' className='commentButton' block>Send</Button>
            </FormItem>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(CommentRelease);