require("./App.css");

import React from 'react';

import Nav from './Nav.jsx';
import SideBar from './SideBar.jsx';
import Home from './Home.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div className="app">
      	<Nav />
      	{this.props.children}
      </div>
    )
  }
});

export default App;
