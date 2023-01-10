import React from 'react'
import CV from '../../assets/cv.pdf';
import {MdOutlineWavingHand} from 'react-icons/md';

const CTA = () => {
  return (
    <div className="cta home__data">
      <h1 className="home__title">OULAYA OMAR <span className="home__hand"><MdOutlineWavingHand/></span></h1>  
      <h3 className="home__subtitle">Développeur web FullStack</h3>
      <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex suscipit sit deserunt modi consequatur praesentium incidunt. Hic assumenda necessitatibus voluptatem quaerat ex voluptatibus debitis!</p>
      {/* <a href={CV}download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'> let's Talk</a> */}
    </div>
  )
}


export default CTA