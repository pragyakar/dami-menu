import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => (
  <div className="menu-item">
    <Link to={`/details/${props.name}`}>
      <i className={`${props.icon} menu-icon`} />
      <p className='menu-item-name'>{props.name}</p>
    </Link>
  </div>
);

export default MenuItem;