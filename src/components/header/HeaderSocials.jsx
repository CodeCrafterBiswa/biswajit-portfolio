import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/biswajit-pramanik/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/CodeCrafterBiswa' target='_blank' rel="noreferrer"><FaGithub /></a>
      <a href='mailto:jbiswajitpramanik@gmail.com' target='_blank' rel="noreferrer"><MdOutlineEmail /></a>
    </div>
  )
}

export default HeaderSocials;
