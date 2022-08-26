import React from 'react'
import CTA from './CTA';
import './header.css';
import ME from '../../assets/profile-without-bg.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>hello I'm</h5>
        <h1>omar</h1>
        <h5 className="text-lighy">FullStack developper</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header