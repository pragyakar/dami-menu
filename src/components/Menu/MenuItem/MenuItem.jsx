import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = props => (
  <div className="menu-item">
    <Link to={`/details/${props.name}`}>
      <i className={`${props.icon} menu-icon`} />
      <p className='menu-item-name'>{props.name}</p>
    </Link>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
}

export default MenuItem;