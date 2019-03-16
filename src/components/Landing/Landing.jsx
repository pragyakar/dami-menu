import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => ( 
  <div className="landing">
    <p className="landing-title">Dami Menu</p>
    <Link to='/menu' className="landing-button">Check it out</Link>
  </div>
);

export default Landing;