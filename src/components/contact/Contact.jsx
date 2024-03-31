import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4bc12hm', 'template_ffq64kk', form.current, {
        publicKey: 'B6is0seYXF9jgSQsD',
      })
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jbiswajitpramanik@gmail.com</h5>
            <a href='mailto:jbiswajitpramanik@gmail.com' rel="noreferrer" target='_blank' >Send a message</a>
          </article>
          <article className='contact__option'>
            <LiaFacebookMessenger className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Biswajit Pramanik</h5>
            <a href='https://www.facebook.com/profile.php?id=100088333083625' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 6295800014</h5>
            <a href='https://api.whatsapp.com/send?phone=+916295800014' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
