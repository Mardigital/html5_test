import React from 'react';
import './Header.css';
import logo from '../img/logo.png';

const Header = props =>
  <div className={`header header__theme_${props.theme}`}>
    <img className={`logo__img`} src={logo} alt='Logotype'/>
    <span className={`logo__text`}> HTML5 TEST</span>
  </div>

export default Header;
