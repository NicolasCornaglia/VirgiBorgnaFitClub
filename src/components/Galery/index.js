import './index.scss'
import randomPic from '../../assets/img/IMG_8559.JPG'
import Footer from '../Footer'

const Galery = () => {


   return (
      <>
         <div className='header-bg'></div>
         <div className='galery-container'>
            <div className='galery'>
               <div className='dance'>
                  <div className='dance-title'><h2>BAILE</h2></div>

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
                  <div className='comedy-title'><h2>COMEDIA MUSICAL</h2></div>

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

         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default Galery