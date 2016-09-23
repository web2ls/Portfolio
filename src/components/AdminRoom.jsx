require('./AdminRoom.css');

import React from 'react';
import {Link} from 'react-router';

const AdminRoom = React.createClass({
  render: function() {
    return(
      <div>
        <header>
          Admin Panel
        </header>
        <nav className='admin__navigation'>
          <div className='admin-nav__header'>Navigation Panel</div>
          <ul className='admin-nav__menu'>
            <li><Link to='/admin_room/add_work'>Add New Works</Link></li>
            <li><Link to='/admin_room/add_blog'>Add New Blogs</Link></li>
            <li><Link to='/'>Go to Home</Link></li>
          </ul>
        </nav>
        <div className='admin__content'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default AdminRoom;
