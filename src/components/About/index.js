import './index.scss'
import React from 'react';
import Footer from '../Footer';
import Galery from '../Galery';
const About = () => {
   return (
      <>
         <div className='about-container'>
            <div className='header-bg'></div>
            <div className='about-content'>
               <h1 className='about-title'>¿QUIENES SOMOS?</h1>
               <p>En Virgi Borgna Fit Club nos atraviesa el arte en varias de sus formas, es un espacio para todos los amantes del movimiento, del canto, de la actuación.
                  Contamos con diferentes clases para todos los niveles, ofreciendo entrenamiento de calidad en distintos estilos para alumnos iniciales, intermedios y profesionales.
                  A través de nuestros profesores, nuestro objetivo es lograr que te sientas parte de un espacio donde no sólo vas a aprender, explorar, conectar y crear, sino donde puedas divertirte, pasarla bien y sacar tu mejor versión.
                  ¿Estás listo?
               </p>
            </div>

         <Galery />
         </div>


         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default About