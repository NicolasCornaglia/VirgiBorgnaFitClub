import './index.scss'
import Footer from '../Footer'
import Activity from '../Activity'
import fitDanceAdultosImg from '../../assets/img/IMG_8551.JPG'

const Dance = () => {
   let classImage = fitDanceAdultosImg;
   let titulo = 'Titulo de la clase';
   let description = 'Fit Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.';
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