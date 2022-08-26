import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsDiscord} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7tnski', 'template_xdecazk', form.current, '3d28UvLo-kCoaZ3Kx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="toSend">
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>oulaya.omar@gmail.com</h5>
          <a href="mailto:oulaya.omar@gmail.com">send a message</a>
        </article>

        <article className="contact__option">
          <BsDiscord className='contact__option-icon'/>
          <h4>Discord</h4>
          <h5>oulaya.omar@gmail.com</h5>
          <a href="mailto:oulaya.omar@gmail.com">send a message</a>
        </article>

        <article className="contact__option">
          <ImLinkedin className='contact__option-icon'/>
          <h4>Linkedin</h4>
          <h5>oulaya.omar@gmail.com</h5>
          <a href="mailto:oulaya.omar@gmail.com">send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" placeholder='Your message' required rows={7}></textarea>
        <button type='submit' className='btn btn-primary'>send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact