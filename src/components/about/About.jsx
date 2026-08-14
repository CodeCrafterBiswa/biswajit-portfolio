import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <span className='section__eyebrow'>Get To Know</span>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__panel'>
          <div className='about__panel-row'>
            <span>Experience</span>
            <span>4y 5m</span>
          </div>
          <div className='about__panel-row'>
            <span>Current Role</span>
            <span>Senior Consultant</span>
          </div>
          <div className='about__panel-row'>
            <span>Location</span>
            <span>Kolkata, IN</span>
          </div>
          <div className='about__panel-row'>
            <span>Focus</span>
            <span>React + .NET Core</span>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Government &amp; Enterprise Scale</h5>
              <small>NSO/MoSPI national survey platforms, ERP &amp; revenue management systems</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Team Leadership</h5>
              <small>Led &amp; mentored developers across 5+ delivery teams</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>ISO-Compliant Delivery</h5>
              <small>ISO 27001 &amp; ISO 9001 certified secure data handling</small>
            </article>
          </div>
          <p>
            Senior Software Consultant with 4+ years designing, developing, and delivering scalable,
            secure, high-performance web applications using React.js, JavaScript, Python, SQL, .NET Core (MVC),
            and Node.js. I've built frontend architecture and multi-role access control for India's flagship
            industrial survey platform (ASI) under the National Statistical Office, alongside ERP and utility
            billing systems for enterprise clients.
          </p>
          <p>
            I specialize in translating complex government and enterprise data requirements into clean,
            performant interfaces — while mentoring junior developers and enforcing code quality through
            structured reviews in Agile delivery environments.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
