import React from 'react';

const MenuDetails = props => (
  <div className='details'>
    <p className='details-title'>{props.match.params.page}</p>
  </div>
);

export default MenuDetails;