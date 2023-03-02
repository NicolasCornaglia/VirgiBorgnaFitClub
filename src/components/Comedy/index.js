import './index.scss'
import Footer from '../Footer'
import Activity from '../Activity'

const Comedy = () => {
   return (
      <>
         <div className='comedy-container'>
            <div className='header-bg'></div>
            <div className='comedy-spacing'></div>
            <div className='comedy-title'>
               <article>
                  <h1>COMEDIA MUSICAL</h1>
               </article>
            </div>
            <div className='comedy-content'>
               <div className='cards-container'>
                  {/* {genres.map(genre => (<GenresInDb genero={genre}/>))} */}
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
               </div>

            </div>
         </div>

         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default Comedy