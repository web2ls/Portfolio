require("./NotFoundPage.css");
import React from 'react';

const NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className='not-found-page'>
        <div className="error-text">
          <div className="error-number">404</div>
          <div className="error-description">По всей видимости такой страницы не существует на данном ресурсе.</div>
          <div className='error-variants'>Попробуйте выбрать что-нибудь из меню слева:)</div>
        </div>
      </div>
    )
  }
});

export default NotFoundPage;