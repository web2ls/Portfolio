require("./SideBar.css");
import React from 'react';

const SideBar = React.createClass({
  render: function() {
    return (
      <div className="sidebar">
      	<img src='./image/test.jpg' />
      	<img src='./image/test.jpg' />
      	<img src='./image/test.jpg' />
      	<img src='./image/test.jpg' />
      </div>
    )
  }
});

export default SideBar;