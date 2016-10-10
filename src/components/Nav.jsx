require("./Nav.css");

import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <div className="main-navigation">
      	<div className="logo">
          <Link to='/'><img className="sign" src="./image/logo.svg" /></Link>
        </div>
      	<div className="navi-divider"></div>
      	<ul className="nav">
      		<li><Link to='/' activeClassName='active'>главная</Link></li>
      		<li><Link to='/contacts' activeClassName='active'>контакты</Link></li>
      		<li><Link to='/works' activeClassName='active'>проекты</Link></li>
      		<li><Link to='/services' activeClassName='active'>сервисы</Link></li>
          <li><Link to='/login' activeClassName='active'>идентификация</Link></li>
      	</ul>
      	<div className="navi-divider"></div>
      	<div className="navi-divider"></div>
      </div>
    )
  }
});

export default Nav;
