import React from 'react'
import './home.css';
import './img.css';
import HeaderSocial from './HeaderSocial';
import CTA from './CTA';
// import  '../../assets/js/index.js';




const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <HeaderSocial/>
                
                  <div class="image" data-repetition data-repetition-count="10" data-repetition-scale-interval="0.06" ></div>
                
                <CTA/>
                 {/* <a href="#contact" className="scroll_down">Scroll Down</a>  */}
            </div>
        </div>
		  
        
    </section>
  )
}

export default Home