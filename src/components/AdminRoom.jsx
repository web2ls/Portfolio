require('./AdminRoom.css');

import React from 'react';

const AdminRoom = React.createClass({
  render: function() {
    return(
      <div>
        <header>
          Admin Panel
        </header>
        <nav>
          <div className='admin-nav__header'>Navigation Panel</div>
          <ul className='admin-nav__menu'>
            <li>My Works</li>
            <li>My Blogs</li>
          </ul>
        </nav>
      </div>
    )
  }
});

export default AdminRoom;
