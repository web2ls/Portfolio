import React from 'react';
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBZylV35-qbYyG5xfOqIgfKqRKjVU-eQtU",
    authDomain: "online-react-app.firebaseapp.com",
    databaseURL: "https://online-react-app.firebaseio.com",
    storageBucket: "online-react-app.appspot.com"
  };
firebase.initializeApp(config);
const database = firebase.database();

const Fire = React.createClass({
  handleClick: function() {
    console.log('yep');
    database.ref('posts').set('testValue');
  },

  render: function() {
    return(
      <div>
        Fire component
        <button onClick={this.handleClick}>ad new task</button>
      </div>
    )
  }
});

export default Fire;
