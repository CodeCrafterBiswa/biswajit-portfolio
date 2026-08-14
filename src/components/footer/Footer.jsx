import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Biswajit Pramanik</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Work</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/biswajit-pramanik/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/CodeCrafterBiswa' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href='mailto:jbiswajitpramanik@gmail.com' target='_blank' rel="noreferrer"><MdOutlineEmail /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Biswajit Pramanik. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
