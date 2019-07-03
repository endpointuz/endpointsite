import React from 'react';

class MenuItems extends React.Component {
  render() {
    const {
      children,
      className = '',
      style = null,
    } = this.props;

    return (
      <ul className={`menu-list ${className}`} style={style}>
        {children.map((el, i) => (
          <li className="menu-list-item" key={i}>
            {el}
          </li>
        ))}
      </ul>
    );
  }
}

export default MenuItems;
