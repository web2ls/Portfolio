require('./normalize.css');
require('./font-awesome/font-awesome.min.css');
require('./core.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';
import Services from './components/Services.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import Works from './components/Works.jsx';
import AdminRoom from './components/AdminRoom.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/admin_room' component={AdminRoom} />
  	<Route path='/' component={App}>
  		<IndexRoute component={Home} />
  		<Route path='/contacts' component={Contacts} />
  		<Route path='/services' component={Services} />
      <Route path='/works' component={Works} />
  		<Route path='*' component={NotFoundPage} />
  	</Route>
  </Router>,
  document.getElementById('container-app')
)
