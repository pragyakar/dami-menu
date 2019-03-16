import React from 'react';
import { Link } from 'react-router-dom';

const MenuDetails = props => (
  <div className='details'>
    <p className='details-title'>{props.match.params.page}</p>
    <Link to='/menu' className="details-link">Back to menu</Link>
  </div>
);

export default MenuDetails;