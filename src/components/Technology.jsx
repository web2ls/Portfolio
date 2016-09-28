require('./Tecnology.css');
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
                logo1
              </div>
              <div className='technology__card'>
                logo2
              </div>
              <div className='technology__card'>
                logo3
              </div>
           </div>
        </div>
      </div>
    )
  }
});

export default Technology;
