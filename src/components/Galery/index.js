import './index.scss'
import randomPic from '../../assets/img/IMG_8559.JPG'
/* import { useState } from 'react'; */

const Galery = () => {


   return (
      <>
         {/* <div className='header-bg'></div> */}
         <div className='galery-container'>
            <div className='galery'>
               <div className='title'><h1>GALERIA</h1></div>

               <div className='dance'>
                  <h3 className='dance-title'>
                     BAILE
                  </h3>

                  <div className='dance-galery'>
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                  </div>

               </div>

               <div className='comedy'>
                  <h3 className='comedy-title'>
                     COMEDIA MUSICAL
                  </h3>

                  <div className='comedy-galery'>
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                     <img src={randomPic} alt='pic' />
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default Galery