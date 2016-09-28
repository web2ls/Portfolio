require('./Work.css');
import React from 'react';
import {storage} from '../core.js';

const Work = React.createClass({
  getInitialState: function() {
    return {
      imageLink: ''
    }
  },

  componentWillMount: function() {
    var that = this;
    const imageRef = storage.ref('images/' + this.props.fileImageName);
    imageRef.getDownloadURL().then(function(url) {
      that.setState({imageLink: url});
    });
  },

  render: function() {
    return (
      <div className='work__card'>
        <img src={this.state.imageLink} />
      </div>
    )
  }
});

export default Work;
