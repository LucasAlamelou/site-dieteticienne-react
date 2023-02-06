import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from './Header.module.css';
import toggleSvg from '../../Image/toggle.svg';
const Header = () => {
  const [isConnected, setIsConnected] = useState(
    window.localStorage.getItem('tokenMyApp') ? true : false
  );
  const [toggle, setToggle] = useState(window.innerWidth < 768 ? false : true);
  return (
    <header className={styled.header} id="header">
      <>
        <img
          src={toggleSvg}
          alt="toggle"
          style={{ width: '40px', height: '40px' }}
          onClick={() => setToggle(!toggle)}
          className={styled.ButtonToggle}
        />
        <div className={styled.headerTitle}>
          <p className={styled.headerTitleP}>Sandrine Coupart</p>
          <p className={styled.headerTitleP}>diéticienne-nutrionniste</p>
        </div>

        {toggle ? (
          <nav className={styled.headerNav}>
            <ul className={styled.headerNavUl}>
              <Link className={styled.headerNavLink} to="/">
                ACCEUIL
              </Link>
              <Link className={styled.headerNavLink} to="/recettes">
                MES RECETTES
              </Link>
              <Link className={styled.headerNavLink} to="/#presentation-main">
                A PROPOS
              </Link>
              <Link className={styled.headerNavLink} to="/contact">
                CONTACT
              </Link>
              {!isConnected ? (
                <Link className={styled.headerNavLink} to="/login">
                  SE CONNECTER
                </Link>
              ) : (
                <Link
                  className={styled.headerNavLink}
                  onClick={(e) => {
                    setIsConnected(false);
                    window.localStorage.removeItem('tokenMyApp');
                    window.localStorage.removeItem('roleMyApp');
                  }}
                >
                  SE DECONNECTER
                </Link>
              )}
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </>
    </header>
  );
};

export default Header;
