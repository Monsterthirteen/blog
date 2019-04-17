import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <Link to='/'><span>monster.com</span></Link><a href='https://github.com/Monsterthirteen/blog'><b> (</b><i> src </i><b>) </b></a>
      </div>
    );
  }
}

export default Header;