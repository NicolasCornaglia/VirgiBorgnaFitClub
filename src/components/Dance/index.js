import './index.scss'
import Footer from '../Footer'
import Activity from '../Activity'
import fitDanceAdultosImg from '../../assets/img/IMG_8551.JPG'
/* import danceVideo from '../../assets/videos/Video-BAILE.MP4' */

const Dance = () => {
   let classImage = fitDanceAdultosImg;
   let titulo = 'Titulo de la clase';
   let description = 'Titulo de la claseTitulo de la claseTitulo de la claseTitulo de la claseTitulo de la clase';
   let professorsInfo1 = [
      {
         name: "eusebio perez1",
         img: fitDanceAdultosImg
      },
      {
         name: "eusebio perez2",
         img: fitDanceAdultosImg
      },
      {
         name: "eusebio perez3",
         img: fitDanceAdultosImg
      },
      {
         name: "eusebio perez4",
         img: fitDanceAdultosImg
      },
   ];

   return (
      <>
         <div className='dance-container'>
            <div className='header-bg'></div>
            <div className='dance-title'>
               <article>
                  <h1>CLASES DE BAILE</h1>
               </article>
            </div>
            <div className='dance-content'>
               <div className='cards-container'>
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
                  <Activity classImg={classImage} classTitle={titulo} classDescription={description} professors={professorsInfo1} />
               </div>

            </div>
         </div>

         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default Dance