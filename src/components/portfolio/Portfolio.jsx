import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tax.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Income Tax Calculator',
    github: 'https://github.com/CodeCrafterBiswa/my_income_tax_calculator.git',
    demo: 'https://codecrafterbiswa.github.io/my_income_tax_calculator/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Live Weather Forecast',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Online Newspaper',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'School Management Syatem',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project in ReactJs',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project in NodeJs',
    github: 'https://github.com',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          portfolioData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;
