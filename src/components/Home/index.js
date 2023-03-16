import './index.scss'
import imgBaile1 from '../../assets/img/B_1561.JPG'
import imgBaile2 from '../../assets/img/B_1612.JPG'
import imgCM1 from '../../assets/img/CM-VB-727-modif.jpg'
import News from '../News'
import BackgroundVideo from '../BackgroundVideo';
import Footer from '../Footer'

const Home = () => {
   return (
      <div className='home-container'>
         <BackgroundVideo />
         <div className='home'>
            <div className='welcome'>
               <div className='welcome-text-container'>
                  <div className='welcome-text-content'>
                     <h2>BIENVENIDOS</h2>
                     <p>
                        En Virgi Borgna Fit Club buscamos que todos nuestros alumnos sientan que pueden expresarse y diviertirse
                        en la actividad que mas les guste. Sea bailando o actuando en comedia musical, priorizamos un buen ambiente
                        en el que todos disfrutemos de las clases.
                     </p>
                  </div>
               </div>

               <div className='welcome-images'>
                  <div className='img-wrapper'>
                     <a href='/dance'>
                        <img src={imgBaile1} alt='welcome-picture1' className='welcome-image' loading='lazy' />
                        <div className='img-text'><p>BAILE</p></div>
                     </a>
                  </div>

                  <div className='img-wrapper'>
                     <a href='/comedy'>
                        <img src={imgCM1} alt='welcome-picture2' className='welcome-image' loading='lazy'/>
                        <div className='img-text'><p>COMEDIA<br />MUSICAL</p></div>
                     </a>
                  </div>

                  <div className='img-wrapper'>
                     <a href='/about'>
                        <img src={imgBaile2} alt='welcome-picture3' className='welcome-image' loading='lazy'/>
                        <div className='img-text'><p>QUIENES<br />SOMOS</p></div>
                     </a>
                  </div>
               </div>
            </div>

            <News />

            <footer className='footer'>
               <Footer />
            </footer>

         </div>
      </div>
   )
}


export default Home