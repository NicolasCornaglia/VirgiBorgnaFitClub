import './index.scss'
import imgBaile from '../../assets/img/IMG_8559.JPG'
/* import imgComedia from '../../assets/img/CMVB-228.JPG' */

const News = () => {
   return (
      <div className='news-container'>
         <div className='news'>
            <div className='news-title'>
               <h1>NOVEDADES</h1>
            </div>

            <div className='news-content'>
               <div className='image-container'>
                  <img src={imgBaile} alt='inscription' />
               </div>

               <div className='news-content-text'>
                  <h2>INSCRIPCCIONES 2023</h2>
                  <p>Aprovecha para comenzar el año de la mejor manera anotandote en las clases que mas te gusten</p>
                  <div className='news-links'>
                     <div className='dance'>
                        <a href='/'>Baile</a>
                     </div>
                     <div className='musical-comedy'>
                        <a href='/'>Comedia musical</a>
                     </div>
                  </div>



               </div>
            </div>
         </div>

      </div>
   )
}

export default News