require('./Technology.css');
import React from 'react';

const Technology = React.createClass({
  render: function() {
    return (
      <div>
        <div className='container-content'>
          <div className='content__header'>Технологии</div>
          <div className='content__began'>
            <div className='red-line'></div>
            <div className='cyan-line'></div>
            <div className='gray-line'></div>
           </div>
           <div className='content__text'>
              <div className='technology__card'>
                <img src='./image/html5.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/css3.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/javascript.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/jquery.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/meteor.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/react.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/bootstrap.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/sass.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/webpack.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/photoshop.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/firebase.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/mongodb.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/nodejs.svg' />
              </div>
              <div className='technology__card'>
                <img src='./image/github.svg' />
              </div>
           </div>
        </div>
      </div>
    )
  }
});

export default Technology;
