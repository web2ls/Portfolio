require('./normalize.css');
require('./font-awesome/font-awesome.min.css');
require('./core.css');

const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBZylV35-qbYyG5xfOqIgfKqRKjVU-eQtU",
    authDomain: "online-react-app.firebaseapp.com",
    databaseURL: "https://online-react-app.firebaseio.com",
    storageBucket: "online-react-app.appspot.com"
};
firebase.initializeApp(config);
const database = firebase.database();
const storage = firebase.storage();

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
import AddWork from './components/AddWork.jsx';
import AddBlog from './components/AddBlog.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/admin_room' component={AdminRoom}>
      <Route path='/admin_room/add_work' component={AddWork} />
      <Route path='/admin_room/add_blog' component={AddBlog} />
    </Route>
  	<Route path='/' component={App}>
  		<IndexRoute component={Home} />
  		<Route path='/contacts' component={Contacts} />
  		<Route path='/services' component={Services} />
      <Route path='/works' component={Works} />
  		<Route path='*' component={NotFoundPage} />
  	</Route>
  </Router>,
  document.getElementById('container-app')
);

export {database, storage};
