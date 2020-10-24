import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Header = () => {
  const listMenu = ['About', 'Experience', 'Skills', 'Contact'];

  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
