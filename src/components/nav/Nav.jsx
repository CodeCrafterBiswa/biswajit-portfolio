import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { VscTools } from 'react-icons/vsc';
import { RiFolderLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const links = [
    { href: '#home', icon: <AiOutlineHome /> },
    { href: '#about', icon: <AiOutlineUser /> },
    { href: '#experience', icon: <BiBook /> },
    { href: '#skills', icon: <VscTools /> },
    { href: '#portfolio', icon: <RiFolderLine /> },
    { href: '#contact', icon: <BiMessageSquareDetail /> },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setActiveNav(link.href)}
          className={activeNav === link.href ? 'active' : ''}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}

export default Nav;
