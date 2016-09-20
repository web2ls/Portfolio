require("./Home.css");
import React from 'react';

const FontAwesome = require('react-fontawesome');

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
      	<video id="myvideo" autoPlay loop>
      		<source src="/image/video2.mp4" />
      	</video>
      	<div className="introduce">
      		<h1>алексей слободянский</h1>
      		<h2>Фронтэнд разработчик</h2>
      		<h3>Создание сайтов \ расширение функционала \ внесение исправлений  </h3>
      		<ul className="social">
      			<li><a href="#"><FontAwesome className="fa fa-vk" name="vkontakte" /></a></li>
      			<li><a href="#"><FontAwesome className="fa fa-facebook" name="facebook" /></a></li>
      			<li><a href="#"><FontAwesome className="fa fa-linkedin" name="linkedin" /></a></li>
      			<li><a href="#"><FontAwesome className="fa fa-github" name="github" /></a></li>
      			<li><a href="#"><FontAwesome className="fa fa-twitter" name="twitter" /></a></li>
      		</ul>
      	</div>
      </div>
    )
  }
});

export default Home;