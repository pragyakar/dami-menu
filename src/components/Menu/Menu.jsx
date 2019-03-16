import React from 'react';

import MenuItem from './MenuItem';

class Menu extends React.Component {

  state = {
    menuItems: [
      {id: 1, name: 'Flerkin', iconClass: 'fas fa-cat' },
      {id: 2, name: 'Celebration', iconClass: 'fas fa-glass-cheers' },
      {id: 3, name: 'Clan', iconClass: 'fas fa-khanda' },
      {id: 4, name: 'Ladybugs', iconClass: 'fas fa-bug' },
      {id: 5, name: 'Certification', iconClass: 'fas fa-award' },
      {id: 6, name: 'Settings', iconClass: 'fas fa-cog' },
    ]
  };

  render() {
    const { menuItems } = this.state;
    return (
      <div className='menu'>
        {/* <p className='menu-title'>Menu</p> */}
        <div className='menu-grid'>
          { menuItems.map((item, index) => {
            return (
              <MenuItem 
                key={index}
                name={item.name}
                icon={item.iconClass}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Menu;