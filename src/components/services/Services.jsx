import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Ensuring a seamless and intuitive user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Conduct thorough user research, market analysis, and competitor analysis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Create interactive prototypes to visualize the design structure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Conduct usability testing with real users to identify usability issues.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Ensure that designs are accessible to all users.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Ensure that websites are designed to be responsive.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Optimize website loading speed by minimizing HTTP requests.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Security measures such as HTTPS, secure authentication methods.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Apply SEO best practices during development, including using semantic HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Develop custom web applications tailored to specific business needs.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='services'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Use relevant keywords and optimize content for search engines (SEO).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Proofread and edit content to ensure accuracy, clarity, and professionalism.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Incorporate visual elements such as images, infographics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Stay updated with industry trends and technologies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Incorporate real-life examples or case studies to illustrate concepts.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;
