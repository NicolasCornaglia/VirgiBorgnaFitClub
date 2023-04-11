import React from 'react';
import './index.scss';
import Carrusel from '../Carrusel';

const News = () => (
   <div className='news-container'>
      <div className='news'>
         <div className='news-title'>
            <h1>NOVEDADES</h1>
         </div>

         <div className='news-content'>
            <div className='image-container'>
               <Carrusel />
            </div>

            <div className='news-content-text'>
               <div>
                  <h2>INSCRIPCIONES</h2>
                  <p>
                     ¿Te gusta bailar, cantar o actuar?
                     ¡Este lugar es para vos, sumate a nuestras actividades!
                  </p>
               </div>
               <div className='news-links'>
                  <div className='dance'>
                     <h3>Baile</h3>
                     <a href='https://docs.google.com/forms/d/e/1FAIpQLSeWWPHnAmkItGhjvys9wvLKRACk7NIdP5z8rXnI6M4HvRB-MA/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids</div></a>
                     <br />
                     <a href='https://forms.gle/URV5xvmTBLdcGzyJ9' target="_blank" rel="noopener noreferrer"><div className='btn'>Teens</div></a>
                     <br />
                     <a href='https://forms.gle/ptgRDt1NEh1de5pZ8' target="_blank" rel="noopener noreferrer"><div className='btn'>Adultos</div></a>
                  </div>
                  <div className='musical-comedy'>
                     <h3>Comedia Musical</h3>
                     <a href='https://docs.google.com/forms/d/e/1FAIpQLSdKNn2r03imBeGZ-SbaEj1PotW4cEfZoocIdCirWc5yRlDEWw/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids I, II, III </div></a>
                     <br />
                     <a href='https://docs.google.com/forms/d/e/1FAIpQLSdEVsu3BJSiiVZefy78JX4IMtOV1d3TTwdfhTGui8TA9TixDQ/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Adolescentes y adultos </div></a>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
);

export default News;
