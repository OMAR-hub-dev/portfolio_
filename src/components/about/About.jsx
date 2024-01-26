import React from 'react'
import './about-copy.css';
import ME from "../../assets/1.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {ImFolderOpen} from 'react-icons/im';

const About = () => {
  return (
    <section id="about">
      <h5>Entrer en contact</h5>
      <h2>Parcours</h2>

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
          <p>Motivé et persévèrent, je m'adapte à toutes les situations.  <br />
            Soucieux du détail et un bon esprit d'équipe , je sais prendre l'initiative quand il faut. Organisé, je sais prendre en compte les priorités et travailler en autonomie. <br />
            J'aime apprendre de nouvelle choses. </p>

          <a href="#toSend"  className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About