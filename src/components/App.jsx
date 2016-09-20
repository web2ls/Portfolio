require("./App.css");

import React from 'react';

import Nav from './Nav.jsx';
import Content from './Content.jsx';
import SideBar from './SideBar.jsx';
import Home from './Home.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div className="app">
      	<Nav />
      	{this.props.children}
      	<SideBar />
      </div>
    )
  }
});

export default App;
