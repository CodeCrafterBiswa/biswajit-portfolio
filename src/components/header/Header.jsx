import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div>
          <span className="header__eyebrow">Senior Software Consultant</span>
          <h1 className="header__title">Biswajit Pramanik</h1>
          <p className="header__role">
            Building secure, scalable platforms for <strong>government, ERP, and enterprise</strong> systems
          </p>
          <p className="header__summary">
            4+ years designing and delivering frontend architecture, multi-role access control, and
            data visualization for national survey platforms (NSO/MoSPI) and enterprise ERP &amp; revenue
            management systems — using React.js, .NET Core, Node.js, and Azure.
          </p>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="header__visual">
          <div className="header__visual-image">
            <img src={ME} alt="Biswajit Pramanik" />
          </div>
          <div className="header__visual-caption">
            <span><strong>4+</strong>Years Experience</span>
            <span><strong>6</strong>Major Platforms</span>
            <span><strong>2</strong>ISO Certifications</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
