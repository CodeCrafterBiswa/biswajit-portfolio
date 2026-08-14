import React from 'react';
import './skills.css';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    title: 'Backend & Frameworks',
    items: ['Node.js', '.NET Core (MVC)']
  },
  {
    title: 'Cloud, DevOps & Tools',
    items: ['Azure', 'Docker', 'CI/CD Pipeline', 'Git', 'Jira', 'Agile/Scrum']
  }
];

const Skills = () => {
  return (
    <section id='skills'>
      <span className='section__eyebrow'>What I Work With</span>
      <h2>Skills</h2>
      <div className='container skills__container'>
        {skillGroups.map((group, i) => (
          <div className='skills__group' key={i}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;
