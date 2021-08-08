import React from 'react';
import './landingpage.css'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <div className="title">
          <h1>No More Endless Scrolling Through Netflix</h1>
      </div>
      <div className="description">
          <h2>We help you find the next movie you want to watch! Have a sneakpeak at today's most popular movies and add them to your "Favorites List" to watch later!</h2>
      </div>
      <Link to="/signup">
        <div className="button-signup">
            <h3>Sign Up</h3>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
