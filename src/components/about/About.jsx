import React from 'react'
import './about.css';
import ME from "../../assets/me-about.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {ImFolderOpen} from 'react-icons/im';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Knom</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Exprience</h5>
              <small>Lorem ipsum dolor sit amet consectetur.</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>clients</h5>
              <small>Lorem ipsum dolor sit amet consectetur.</small>
            </article>

            <article className='about__card'>
              <ImFolderOpen className='about__icon'/>
              <h5>projrts</h5>
              <small>3+ Lorem ipsum dolor sit amet consectetur.</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo voluptate nulla ex. Voluptate nesciunt commodi dolores aperiam tempora magni alias aliquid itaque numquam facere quae eaque, et, illo architecto quo beatae omnis illum aut consequatur.</p>

          <a href="#contact" id="contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About