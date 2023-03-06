import './index.scss'/* 
import imgBaile from '../../assets/img/IMG_8559.JPG' */
/* import imgComedia from '../../assets/img/CMVB-228.JPG' */
import Carrusel from '../Carrusel'

const News = () => {
   return (
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
                     <h2>INSCRIPCCIONES 2023</h2>
                     <p>Aprovecha para comenzar el año de la mejor manera anotandote en las clases que mas te gusten</p>
                  </div>
                  <div className='news-links'>
                     <div className='dance'>
                        <h3>Baile</h3>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeWWPHnAmkItGhjvys9wvLKRACk7NIdP5z8rXnI6M4HvRB-MA/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids</div></a>
                     </div>
                     <div className='musical-comedy'>
                        <h3>Comedia Musical</h3>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdKNn2r03imBeGZ-SbaEj1PotW4cEfZoocIdCirWc5yRlDEWw/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Kids I, II, III <br />(de 4 a 13 años)</div></a>
                        <br />
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdEVsu3BJSiiVZefy78JX4IMtOV1d3TTwdfhTGui8TA9TixDQ/viewform' target="_blank" rel="noopener noreferrer"><div className='btn'>Adolescentes y adultos <br />(de 14 años en adelante)</div></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default News