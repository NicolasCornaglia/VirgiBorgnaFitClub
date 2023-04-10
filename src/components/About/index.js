import React from 'react';
import './index.scss';
import Footer from '../Footer';
import imgAbout from '../../assets/img/CM-588.JPG';

const About = () => (
   <>
      <div className='about-container'>
         <div className='header-bg'></div>

         <div className='about-title'>
            <h2>¿QUIENES SOMOS?</h2>
         </div>

         <div className='about-content'>
            <div className='about-content-text'>
               En Virgi Borgna Fit Club nos atraviesa el arte en varias de sus
               formas, es un espacio para todos los amantes del movimiento,
               del canto, de la actuación.
               Contamos con diferentes clases para todos los niveles, ofreciendo
               entrenamiento de calidad en distintos estilos para alumnos iniciales,
               intermedios y profesionales.
               A través de nuestros profesores, nuestro objetivo es lograr que te
               sientas parte de un espacio donde no sólo vas a aprender, explorar,
               conectar y crear, sino donde puedas divertirte, pasarla bien y sacar
               tu mejor versión.
               ¿Estás listo?
               <div className='btn'><a href='/dance'>Clases de Baile</a></div>
               <div className='btn'><a href='/comedy'>Clases de Comedia Musical</a></div>
            </div>

            <div className='img-about'>
               <img src={imgAbout} alt='img about' loading='lazy' />
            </div>
         </div>
      </div>

      <footer>
         <Footer />
      </footer>
   </>
);

export default About;
