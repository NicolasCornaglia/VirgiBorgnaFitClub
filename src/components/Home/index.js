import React from 'react';
import './index.scss';
import imgBaile1 from '../../assets/img/IMG_0184.JPG';
import imgBaile2 from '../../assets/img/QUIENES-SOMOS.jpg';
import imgCM1 from '../../assets/img/CM-VB-727-modif.jpg';
import News from '../News';
import BackgroundVideo from '../BackgroundVideo';
import Footer from '../Footer';

const Home = () => (
   <div className='home-container'>
      <BackgroundVideo />
      <div className='home'>
         <div className='welcome'>
            <div className='welcome-text-container'>
               <div className='welcome-text-content'>
                  <h2>BIENVENIDOS</h2>
                  <p>
                     De la fusión del arte y la buena vibra, llega a Rafaela un 8 de noviembre
                     de 2019 esta explosión de energía que vino a revolucionarnos.
                     <br/>
                     <br/>
                     Desde Virgi Borgna Fit Club estamos decididos a vivir cada día con
                     la absoluta intensidad que nos caracteriza.
                     <br/>
                     <br/>
                     El arte es nuestro medio para llegar a vos, para animarte a que te
                     muevas, a que salgas de tu zona de confort y te atrevas a conquistar
                     esos sueños pendientes, dejando de lado los miedos y las frustraciones.
                     <br/>
                     <br/>
                     ¿Estás listo?

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
                     <img src={imgCM1} alt='welcome-picture2' className='welcome-image' loading='lazy' />
                     <div className='img-text'><p>COMEDIA<br />MUSICAL</p></div>
                  </a>
               </div>
               <div className='img-wrapper'>
                  <a href='/about'>
                     <img src={imgBaile2} alt='welcome-picture3' className='welcome-image' loading='lazy' />
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
);

export default Home;
