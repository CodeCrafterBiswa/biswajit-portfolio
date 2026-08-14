import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_4bc12hm', 'template_ffq64kk', form.current, {
        publicKey: 'B6is0seYXF9jgSQsD',
      })
      .then(() => {
        setStatus('sent');
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <section id='contact'>
      <span className='section__eyebrow'>Get In Touch</span>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jbiswajitpramanik@gmail.com</h5>
            <a href='mailto:jbiswajitpramanik@gmail.com' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Biswajit Pramanik</h5>
            <a href='https://www.linkedin.com/in/biswajit-pramanik/' rel="noreferrer" target='_blank'>Connect</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 6295800014</h5>
            <a href='https://api.whatsapp.com/send?phone=+916295800014' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p className='form__status'>Message sent — thank you!</p>}
          {status === 'error' && <p className='form__status'>Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact;
