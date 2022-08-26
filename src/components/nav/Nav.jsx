import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';


const Nav = () => {
  const [activView, setActivView] = useState('#');
  return (
    <nav>
      <a href="#home" onClick={()=> setActivView("#home")} className={activView === '#home' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActivView("#about")} className={activView === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=> setActivView("#experience")} className={activView === '#experience' ? 'active' :''}><BsJournalBookmarkFill/></a>
      <a href="#services"  onClick={()=> setActivView("#services")} className={activView === '#services' ? 'active' :''}><RiServiceLine/></a>
      <a href="#toSend"  onClick={()=> setActivView("#toSend")} className={activView === '#toSend' ? 'active' :''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav