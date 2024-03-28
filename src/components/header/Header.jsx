import React from 'react'
import './header.css';
import LOGO from '../../assets/logo.png';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react';


const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (clicked && window.innerWidth > 480) {
        setClicked(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [clicked]);

  const toggleMobileMenu = (event)=>{
    event.stopPropagation();
    setClicked((prev) => !prev);
    
  };
 
  return (
    <header id='home' className={clicked ? 'container bar' : 'container'}>
      <nav className='nav' ref={navRef}>
        <a href="index.html" className='nav__logo'><img className='logo' src={LOGO} alt="" /></a>
        <div className="nav__menu">
          <ul className={clicked ? 'nav__list open' : 'nav__list'}>
            <li className='nav__item'>
              <a href="#home" className='nav__link'><i className='nav__icon'><AiOutlineHome/></i>Home</a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'><i className='nav__icon'><AiOutlineUser/></i>Parcours</a>
            </li>
            <li className='nav__item'>
              <a href="#experience" className='nav__link'><i className='nav__icon'><BsJournalBookmarkFill/></i>Projets</a>
            </li>
            <li className='nav__item'>
              <a href="#services" className='nav__link'><i className='nav__icon'><RiServiceLine/></i>Services</a>
            </li>
            <li className='nav__item'>
              <a href="#toSend" className='nav__link'><i className='nav__icon'><BiMessageSquareDetail/></i>Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={toggleMobileMenu}>
          {clicked ? <a href="#colse" className='nav__close'><AiOutlineCloseCircle/></a> : <a href='#bar'><FaBars/></a>}
        </div>
      </nav>
    </header>
  );
}

export default Header