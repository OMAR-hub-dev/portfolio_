import React from 'react'
import'./experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
   <section id="experience">
    <h5>what Skills I have</h5>
    <h2>My experience</h2>
    <div className="experience__container container">
      <div className="experience__frontend">
        <h3>frontend Developement</h3>
        <div className="experience__content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>HTML</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>CSS</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>intermediare</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>React</h4>
            <small className='text-light'>experienced</small>
          </article>
        </div>
      </div>
      <div className="experience__backend">
      <h3>backend Developement</h3>
        <div className="experience__content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>Node JS</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>PHP</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>MongoDB</h4>
            <small className='text-light'>intermediare</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>MySQL</h4>
            <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <h4>Symfony</h4>
            <small className='text-light'>experienced</small>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience