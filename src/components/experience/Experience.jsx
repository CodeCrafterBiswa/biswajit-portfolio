import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const experienceData = [
  {
    role: 'Senior Software Consultant',
    company: 'TuTeck Technologies Pvt Ltd, Kolkata',
    dates: 'March 2025 — Present',
    projects: [
      {
        name: 'Annual Survey of Industries (ASI) — NSO/MoSPI',
        points: [
          "Led frontend architecture and a development team for India's flagship industrial survey platform — secure data entry, multi-level validation, multi-role access control, analytics.",
          'Mentored junior developers and conducted regular code reviews, reducing rework across the team.'
        ]
      },
      {
        name: 'Contromoist — ERP (Vendor Management System)',
        points: [
          'Guided a team building vendor onboarding, tracking, and approval workflows; containerized services with Docker.',
        ]
      },
      {
        name: 'PLFS / ASUSE / NSSO Survey Projects — .NET Core MVC',
        points: [
          'Led Tabulation, Paradata, and Visualization modules for national labour-force and enterprise survey platforms.',
          'Mentored teams on .NET Core MVC best practices and coordinated with BA, QA, and backend teams.'
        ]
      }
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Blue Tick IT Solutions, Kolkata',
    dates: 'May 2024 — March 2025',
    projects: [
      {
        name: 'Esyasoft RMS — Revenue Management System (USA)',
        points: [
          'Built self-configurable tariffs, consumer management, meter data, rule engine, and 3D visual analytics for utility billing.',
          'Streamlined delivery with Agile, increasing development speed by 30% and shipping 2 weeks ahead of schedule.'
        ]
      }
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Wefivesoft Pvt Ltd (Absence Soft), Bengaluru',
    dates: 'October 2021 — September 2023',
    projects: [
      {
        name: 'MarkersPro — School Management System (USA)',
        points: [
          'Improved system efficiency by 20% and reduced bugs by 15% through targeted software updates.',
          'Increased user engagement by 25% and application performance by 30% via coding and design improvements.'
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id='experience'>
      <span className='section__eyebrow'>Career Journey</span>
      <h2>Experience</h2>
      <div className='container experience__timeline'>
        {experienceData.map((entry, i) => (
          <div className='experience__entry' key={i}>
            <div className='experience__meta'>
              <h3>{entry.role}</h3>
              <span className='company'>{entry.company}</span>
              <span className='dates'>{entry.dates}</span>
            </div>
            <div className='experience__projects'>
              {entry.projects.map((proj, j) => (
                <div className='experience__project' key={j}>
                  <h4>{proj.name}</h4>
                  <ul>
                    {proj.points.map((point, k) => (
                      <li key={k}>
                        <BsPatchCheckFill />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;
