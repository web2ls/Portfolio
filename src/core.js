require('./normalize.css');
require('./font-awesome/font-awesome.min.css');
require('./core.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path='/' component={App}>
  		<IndexRoute component={Home} />
  		<Route path='/contacts' component={Contacts} />
  	</Route>
  </Router>,
  document.getElementById('container-app')
)
