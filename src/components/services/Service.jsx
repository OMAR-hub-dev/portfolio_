import React from 'react'
import './service.css';
import {RiCheckDoubleLine} from 'react-icons/ri'

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="conatiner services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__liste">
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>            
          </ul>
        </article>

        <article className="services">
          <div className="service__head">
            <h3>web developpement</h3>
          </div>
          <ul className="service__liste">
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>            
          </ul>
        </article>

        <article className="services">
          <div className="service__head">
            <h3>content creation</h3>
          </div>
          <ul className="service__liste">
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <RiCheckDoubleLine className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service