import './index.scss'
import Footer from '../Footer'

const Galery = () => {

   function importAll(r) {
      return r.keys().map(r);
   }

   const imagesDance = importAll(require.context('../../assets/img/dance', false, /\.(png|jpe?g|svg|JPG|jpg)$/));
   const imagesComedy = importAll(require.context('../../assets/img/comedy', false, /\.(png|jpe?g|svg|JPG|jpg)$/));

   const mobileOrNot = (e) => {
      if (window.innerWidth < 768) {
         e.preventDefault();
      }
   }

   return (
      <>
         <div className='header-bg'></div>
         <div className='galery-container'>
            <div className='galery'>
               <div className='dance'>
                  <div className='dance-title'><h2>BAILE</h2></div>
                  <div className='dance-galery'>
                     {imagesDance.map((image,i) => (<a href={image} target="_blank" rel="noreferrer" onClick={mobileOrNot}> <img src={image} alt='dance' key={`${image}_${i}`}/> </a>))}
                  </div>
               </div>

               <div className='comedy'>
                  <div className='comedy-title'><h2>COMEDIA MUSICAL</h2></div>
                  <div className='comedy-galery'>
                     {imagesComedy.map((image,i) => (<a href={image} target="_blank" rel="noreferrer" onClick={mobileOrNot}><img src={image} alt='comedy' key={`${image}_${i}`}/></a>))}
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