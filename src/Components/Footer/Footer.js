import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Footer.module.css';
const Footer = () => {
  return (
    <>
      <footer id="footer" className={styled.Footer}>
        <div className={styled.FooterCoordonees}>
          <p className={styled.FooterCoordoneesP}>
            <span className={styled.Underline}>Coordonées</span>
          </p>
          <p className={styled.FooterCoordoneesP}>
            <span className={styled.Underline}>Tél :</span> 06.07.08.07.08
          </p>
          <p className={styled.FooterCoordoneesP}>
            <span className={styled.Underline}>Adresse :</span> 1 rue Orelsan, 14118 Caen
          </p>
        </div>
        <div className={styled.FooterMention}>
          <p className={styled.FooterMentionP}>
            © Copyright 2023 Sandrine Coupart{' '}
            <Link to="/mentions-legale">| Mentions légales | </Link>
            <Link to="/politique-confidentialite">Politique de confidentialité |</Link>
            Conception : Lucas Alamelou
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
