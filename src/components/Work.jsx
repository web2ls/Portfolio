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
      <div className='work__card'>
        <a href="#"><img
         onMouseEnter={this.handleWorkMouseEnter}
         onMouseLeave={this.handleWorkMouseLeave}
          src={this.state.imageLink} /></a>
        <div className={this.state.imageHover ? 'work-description' : 'hidden'}>
          <div className='work-description__header'>Storks</div>
          <div className='work-description__text'>Мультипликационный фильм аисты дэндинг фильма</div>
        </div>
      </div>
    )
  }
});

export default Work;
