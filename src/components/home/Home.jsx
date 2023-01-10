import React from 'react'
import './home.css'
import HeaderSocial from './HeaderSocial';
import CTA from './CTA';
import ME from '../../assets/profil.jpg';




const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <HeaderSocial/>
                <div className="home__img"></div>
                <CTA/>
                {/* <a href="#contact" className="scroll_down">Scroll Down</a> */}
            </div>
        </div>
    </section>
  )
}

export default Home