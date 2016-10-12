require('./AdminRoom.css');

import React from 'react';
import {Link} from 'react-router';

const FB = require('../firebaseAPI.js');
const auth = FB.auth;

const AdminRoom = React.createClass({
  getInitialState: function() {
    return {
      authorized: false
    }
  },

  handleAuthorized: function(logging) {
    this.setState({authorized: logging});
  },

  handleSignOutClick: function() {
    auth.signOut();
    console.log('yep logout');
  },

  render: function() {
    const children = React.Children.map(this.props.children, (child) => {
      return (
        React.cloneElement(child, {
          onAuthorizedAction: this.handleAuthorized 
        })
      )
    })
    return(
      <div>
        <header>
          Admin Panel
        </header>
        <nav className='admin__navigation'>
          <div className='admin-nav__header'>Navigation Panel</div>
          <ul className='admin-nav__menu'>
            <li><Link to='/admin_room/add_work'>Add New Work</Link></li>
            <li><Link to='/admin_room/add_blog'>Add New Blog</Link></li>
            <li><Link to='/'>Go to Home</Link></li>
             <li><Link onClick={this.handleSignOutClick} to='/'>Sign Out</Link></li>
          </ul>
        </nav>
        <div className='admin__content'>
          {children}
        </div>
      </div>
    )
  }
});

export default AdminRoom;
