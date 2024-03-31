import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I am a passionate full-stack developer with a strong background in front-end and back-end technologies. With a keen eye for detail and a love for creating seamless user experiences, I specialize in crafting responsive web applications that are both visually stunning and functionally robust. My expertise includes HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and more. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of what's possible in web development. Let's build something amazing together!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
