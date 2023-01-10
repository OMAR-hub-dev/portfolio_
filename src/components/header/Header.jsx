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
import { useState } from 'react';


const Header = () => {
  const [clicked, setClicked]= useState('false');

  
  let lastScrollTop = 0;
  let navbar = document.getElementsByClassName('nav');
  
  function setFixed(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
      navbar[0].style.top="-60px";
      }else{
          navbar[0].style.top="0";
      }
      lastScrollTop = scrollTop;}
  window.addEventListener('scroll',setFixed);
 
  return (
    
    <header id='home' className={clicked?'container bar':'container'}>

      <nav  className='nav'>
      <a href="index.html" className='nav__logo'><img className='logo' src={LOGO} alt="" /></a>

        <div className="nav__menu">
          <ul className={clicked? 'nav__list open' : 'nav__list'}>
            <li className='nav__item'>
              <a href="#home" className='nav__link'><i className='nav__icon'><AiOutlineHome/></i>Home</a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'><i className='nav__icon'><AiOutlineUser/></i>About</a>
            </li>
            <li className='nav__item'>
              <a href="#experience" className='nav__link'><i className='nav__icon'><BsJournalBookmarkFill/></i>Experience</a>
            </li>
            <li className='nav__item'>
              <a href="#services" className='nav__link'><i className='nav__icon'><RiServiceLine/></i>Services</a>
            </li>
            <li className='nav__item'>
              <a href="#toSend" className='nav__link'><i className='nav__icon'><BiMessageSquareDetail/></i>Contact</a>
            </li>
          </ul>
          
        </div>
        <div className="nav__toggle" onClick={()=> setClicked(!clicked )}>
             
        { clicked  ?  <a href="#colse" className='nav__close'><AiOutlineCloseCircle/></a> :<a href='#bar'><FaBars/></a > }
        </div>

      </nav>
      {/* <div className="container header_container">
        
        <div className="test">
          <img className='logo' src={LOGO} alt="" />
          
        </div>
        <h5>Bonjour</h5>
        <h5 className="text-lighy">FullStack developper</h5>
        <CTA/>
        

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        
        
      </div> */}
    </header>
    
  )
}

export default Header