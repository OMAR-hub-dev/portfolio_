import React from 'react'
import CV from '../../assets/CV_2024-01-20_Omar_Oulaya.pdf';

import LOGO from "../../assets/logo.png";

const CTA = () => {
  return (
    <div className="cta home__data">
      <h1 className="home__title">Omar OULAYA <span className="home__hand"><img src={LOGO} alt="logo" /></span> </h1>  
      <h3 className="home__subtitle">Développeur Web FullStack</h3>
      <p className="home__description">Bonjour,<br></br>
     
        Je suis <strong>Omar OULAYA</strong>  , titulaire d'une Licence en Développement Web et Business Intelligence. Passionné par les possibilités infinies de la technologie, je suis un individu dynamique et avide d'apprendre. Ma formation m'a doté d'une solide maîtrise des langages de programmation web tels que Java, JavaScript, PHP, ainsi que des frameworks et bibliothèques populaires comme Bootstrap, jQuery, React et Symfony. Doté d'une forte capacité à m'adapter rapidement aux nouvelles technologies et méthodes de développement, je suis prêt à relever de nouveaux défis et à contribuer de manière significative à des projets innovants.
      </p>
      <a href={CV}download className='btn'> Telecharger CV</a>
        {/* <a href="#contact" className='btn btn-primary'> let's Talk</a> */}
    </div>
  )
}


export default CTA
