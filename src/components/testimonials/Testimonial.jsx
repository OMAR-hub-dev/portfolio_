import React from 'react'
import './testimonial.css';
import AVR1 from '../../assets/avatar1.jpg';
import AVR2 from '../../assets/avatar2.jpg';
import AVR3 from '../../assets/avatar3.jpg';
import AVR4 from '../../assets/avatar4.jpg';
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AVR1,
    name : 'teddy la faraise',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima quis. Porro harum corrupti laudantium iusto sit commodi aliquid quisquam non, sapiente quam voluptas tempora',
  },
  {
    avatar: AVR2,
    name : 'Max',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima quis. Porro harum corrupti laudantium iusto sit commodi aliquid quisquam non, sapiente quam voluptas tempora',
  },
  {
    avatar: AVR3,
    name : 'Harvard',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima quis. Porro harum corrupti laudantium iusto sit commodi aliquid quisquam non, sapiente quam voluptas tempora',
  },
  {
    avatar: AVR4,
    name : 'Solange',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima quis. Porro harum corrupti laudantium iusto sit commodi aliquid quisquam non, sapiente quam voluptas tempora',
  },
]


const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar 1" />
                </div>
                <h5 className='avatar__name'>{name}</h5>
                <small className='client__review'>
                    {review}
                </small>
                
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    
    </section>
  )
}

export default Testimonial