require('./Work.css');
import React from 'react';
const FB = require('../firebaseAPI.js');
const database = FB.database;
const storage = FB.storage;
/*import {storage} from '../core.js';*/

const Work = React.createClass({
  getInitialState: function() {
    return {
      imageLink: '',
      imageHover: false
    }
  },

  componentWillMount: function() {
    var that = this;
    const imageRef = storage.ref('images/' + this.props.fileImageName);
    imageRef.getDownloadURL().then(function(url) {
      that.setState({imageLink: url});
    });
  },

  handleWorkMouseEnter: function() {
    this.setState({imageHover: true});
  },

  handleWorkMouseLeave: function() {
    this.setState({imageHover: false});
  },

  render: function() {
    return (
      <div
       onMouseEnter={this.handleWorkMouseEnter}
       onMouseLeave={this.handleWorkMouseLeave}
       className='work__card'>
        <img src={this.state.imageLink} />
        <a href={this.props.workLink} target='_blank'>
          <div className={this.state.imageHover ? 'work-description' : 'hidden'}>
            <div className='work-description__header'>{this.props.workName}</div>
            <div className='work-description__text'>{this.props.workDescr}</div>
          </div>
        </a>
      </div>
    )
  }
});

export default Work;
