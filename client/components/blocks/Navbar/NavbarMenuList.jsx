import { Link } from 'react-router-dom';
import React from 'react';

const NavbarMenuList = () => (
  <ul className="navigator-list">
    <li className="navigator-list-item">
      <Link className="navigator-list-link" to="/">
        Главная
        <div className="navigator-list-text">Главная</div>
        <div className="navigator-list-num">01</div>
      </Link>
    </li>
    <li className="navigator-list-item">
      <Link className="navigator-list-link" to="/about">
        О нас
        <div className="navigator-list-text">О нас</div>
        <div className="navigator-list-num">02</div>
      </Link>
    </li>
    <li className="navigator-list-item">
      <Link className="navigator-list-link" to="/projects">
        Наши проекты
        <div className="navigator-list-text">Наши проекты</div>
        <div className="navigator-list-num">03</div>
      </Link>
    </li>
    <li className="navigator-list-item">
      <Link className="navigator-list-link" to="/portfolio">
        Портфолио
        <div className="navigator-list-text">Портфолио</div>
        <div className="navigator-list-num">04</div>
      </Link>
    </li>
    <li className="navigator-list-item">
      <Link className="navigator-list-link" to="/contacts">
        Контакты
        <div className="navigator-list-text">Контакты</div>
        <div className="navigator-list-num">05</div>
      </Link>
    </li>
  </ul>
);

export default NavbarMenuList;
