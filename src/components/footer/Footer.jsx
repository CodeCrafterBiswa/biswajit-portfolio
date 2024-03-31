import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo' rel="noreferrer">Biswajit</a>
      <ul className='permalinks'>
        <li><a href='#' rel="noreferrer">Home</a></li>
        <li><a href='#about' rel="noreferrer">About</a></li>
        <li><a href='#experience' rel="noreferrer">Experience</a></li>
        <li><a href='#services' rel="noreferrer">Services</a></li>
        <li><a href='#portfolio' rel="noreferrer">Portfolio</a></li>
        <li><a href='#contact' rel="noreferrer">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100088333083625' target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href='https://www.instagram.com/shivay_biswa/' target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href='https://twitter.com/BiswajitPra90' target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Biswajit Pramanik. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
