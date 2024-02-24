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
                     <a href='https://forms.gle/D2ziGV6qMbNp3TTi6' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids & Teens</div></a>
                     <br />
                     <a href='https://wa.me/5493492289969' target="_blank" rel="noopener noreferrer"><div className='btn'>Adultos</div></a>
                     <br />
                     <a href='https://forms.gle/8E7ResjARjLq4tgn6' target="_blank" rel="noopener noreferrer"><div className='btn'>DesafiArte</div></a>
                  </div>
                  <div className='musical-comedy'>
                     <h3>Comedia Musical</h3>
                     <a href='https://forms.gle/Giac9dSFZvqrpXCR7' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids & Pre Teens </div></a>
                     <br />
                     <a href='https://forms.gle/9a1HWNbKrfM9Drn29' target="_blank" rel="noopener noreferrer"><div className='btn'>Adolescentes & Adultos </div></a>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
);

export default News;
