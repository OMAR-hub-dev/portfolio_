import React from 'react'
import'./footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai';
import {FiDribbble} from 'react-icons/fi';



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>OMAR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#toSend">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><AiFillGithub/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OMAR OULAYA, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer