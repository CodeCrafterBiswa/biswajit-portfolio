import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tax.png';
import IMG2 from '../../assets/live-weather.png';

const caseStudies = [
  {
    tag: 'Government · NSO/MoSPI',
    title: 'Annual Survey of Industries (ASI)',
    summary: "Led frontend architecture for India's flagship industrial survey platform — secure data entry, multi-level validation, multi-role access control, and government-compliant reporting.",
    stack: ['React.js', 'Redux', '.NET Core', 'Azure']
  },
  {
    tag: 'Enterprise ERP',
    title: 'Contromoist — Vendor Management System',
    summary: 'Built vendor onboarding, tracking, and approval workflows for an ERP platform, containerized with Docker for consistent deployment across environments.',
    stack: ['React.js', 'Node.js', 'Docker']
  },
  {
    tag: 'Government · NSO/MoSPI',
    title: 'PLFS — Periodic Labour Force Survey',
    summary: 'Led development of Tabulation, Paradata, and Visualization modules for a national labour force survey, coordinating across BA, QA, and backend teams.',
    stack: ['.NET Core MVC', 'SQL', 'Data Visualization']
  },
  {
    tag: 'Enterprise · Utility Billing',
    title: 'Esyasoft RMS — Revenue Management System',
    summary: 'Built self-configurable tariffs, consumer management, meter data, rule engine, and 3D visual analytics for electric/water/gas billing.',
    stack: ['React.js', '3D Visualization', 'Agile']
  }
];

const personalProjects = [
  {
    image: IMG1,
    title: 'Income Tax Calculator',
    github: 'https://github.com/CodeCrafterBiswa/my_income_tax_calculator.git',
    demo: 'https://codecrafterbiswa.github.io/my_income_tax_calculator/'
  },
  {
    image: IMG2,
    title: 'Live Weather Forecast',
    github: 'https://github.com/CodeCrafterBiswa/weather-live-forecast.git',
    demo: 'https://codecrafterbiswa.github.io/weather-live-forecast/'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <span className='section__eyebrow'>Selected Work</span>
      <h2>Case Studies</h2>
      <div className='container portfolio__container'>
        {caseStudies.map((cs, i) => (
          <article className='portfolio__case' key={i}>
            <span className='portfolio__case-tag'>{cs.tag}</span>
            <h3>{cs.title}</h3>
            <p>{cs.summary}</p>
            <div className='portfolio__case-stack'>
              {cs.stack.map((s, j) => <span key={j}>{s}</span>)}
            </div>
          </article>
        ))}
      </div>

      <p className='portfolio__subhead'>Personal Projects</p>
      <div className='container portfolio__projects'>
        {personalProjects.map((p, i) => (
          <article className='portfolio__item' key={i}>
            <div className='portfolio__item-image'>
              <img src={p.image} alt={p.title} />
            </div>
            <h4>{p.title}</h4>
            <div className='portfolio__item-cta'>
              <a href={p.github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
              <a href={p.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
