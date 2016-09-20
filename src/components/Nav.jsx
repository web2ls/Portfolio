require("./Nav.css");

import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <div className="main-navigation">
      	<div className="logo">LOGOTYPE</div>
      	<div className="navi-divider"></div>
      	<ul className="nav">
      		<li><Link to='/' activeClassName='active'>домой</Link></li>
      		<li><Link to='/' activeClassName='active'>блог</Link></li>
      		<li><Link to='/' activeClassName='active'>услуги</Link></li>
      		<li><Link to='/contacts' activeClassName='active'>контакты</Link></li>
      		<li><Link to='/' activeClassName='active'>проекты</Link></li>
      	</ul>
      	<div className="navi-divider"></div>
      	<div className="navi-divider"></div>
      </div>
    )
  }
});

export default Nav;