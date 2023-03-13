import './index.scss'
import Footer from '../Footer'
import Activity from '../Activity'
import fitComedyKidsIImg from '../../assets/img/comedy/454.JPG'
import fitComedyKidsIIImg from '../../assets/img/comedy/517.JPG'
import fitComedyKidsIIIImg from '../../assets/img/comedy/664.JPG'
import fitComedyAdultsIImg from '../../assets/img/comedy/213.JPG'
import fitComedyAdultsIIImg from '../../assets/img/comedy/588.JPG'

const Comedy = () => {

   const class1 = {
      image: fitComedyKidsIImg,
      title: 'Comedia Musical Kids I',
      desc: 'En comedia musical kids queremos lograr un espacio donde la creatividad, el juego, la música, la danza y la actuación se conviertan en los principales actores. Trabajamos su confianza para poder brillar arriba y abajo del escenario.',
      prof: [
         {
            name: "Rocío Pecantet",
            img: fitComedyKidsIImg
         },
         {
            name: "Leandro Quiñones",
            img: fitComedyKidsIImg
         },
         {
            name: "Liset Levrino",
            img: fitComedyKidsIImg
         },
         {
            name: "Candela Inocent",
            img: fitComedyKidsIImg
         },
      ],
      charac: {
         ages: 'de 4 a 6 años',
         dateTime: 'Lunes y miércoles 17:30h',
         duration: '1H',
         wpp: '5493492289969'
      }
   }

   const class2 = {
      image: fitComedyKidsIIImg,
      title: 'Comedia Musical Kids II',
      desc: 'En comedia musical kids queremos lograr un espacio donde la creatividad, el juego, la música, la danza y la actuación se conviertan en los principales actores. Trabajamos su confianza para poder brillar arriba y abajo del escenario.',
      prof: [
         {
            name: "Rocío Pecantet",
            img: fitComedyKidsIImg
         },
         {
            name: "Leandro Quiñones",
            img: fitComedyKidsIImg
         },
         {
            name: "Liset Levrino",
            img: fitComedyKidsIImg
         },
         {
            name: "Candela Inocent",
            img: fitComedyKidsIImg
         },
      ],
      charac: {
         ages: 'de 7 a 9 años',
         dateTime: 'Lunes y miércoles 18:30h',
         duration: '1H',
         wpp: '5493492289969'
      }
   }
   const class3 = {
      image: fitComedyKidsIIIImg,
      title: 'Comedia Musical Kids III',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical.',
      prof: [
         {
            name: "Rocío Pecantet",
            img: fitComedyKidsIImg
         },
         {
            name: "Valentina Porta",
            img: fitComedyKidsIImg
         }
      ],
      charac: {
         ages: 'de 10 a 13 años',
         dateTime: 'Martes y jueves 18:30h',
         duration: '1H',
         wpp: '5493492289969'
      }
   }

   const class4 = {
      image: fitComedyAdultsIImg,
      title: 'Comedia Musical Adultos I',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical.',
      prof: [
         {
            name: "Rocío Pecantet",
            img: fitComedyKidsIImg
         },
         {
            name: "Valentina Porta",
            img: fitComedyKidsIImg
         }
      ],
      charac: {
         ages: 'desde los 14 años.',
         dateTime: 'Lunes y miércoles 13:30h',
         duration: '1H',
         wpp: '5493492289969'
      }
   }

   const class5 = {
      image: fitComedyAdultsIIImg,
      title: 'Comedia Musical Adultos II',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical.',
      prof: [
         {
            name: "Rocío Pecantet",
            img: fitComedyKidsIImg
         },
         {
            name: "Valentina Porta",
            img: fitComedyKidsIImg
         },
         {
            name: " Virginia Borgna",
            img: fitComedyKidsIImg
         }
      ],
      charac: {
         ages: 'desde los 14 años.',
         dateTime: 'Lunes y miércoles 20:30h',
         duration: '1H',
         wpp: '5493492289969'
      }
   }

   const classes = [class1, class2, class3, class4, class5];

   return (
      <>
         <div className='dance-container'>
            <div className='header-bg'></div>
            <div className='dance-title'>
               <article>
                  <h1>CLASES DE COMEDIA MUSICAL</h1>
               </article>
            </div>
            <div className='dance-content'>
               <div className='cards-container'>
                  {classes.map((element, i) =>
                     <Activity
                        classImg={element.image}
                        classTitle={element.title}
                        classDescription={element.desc}
                        professors={element.prof}
                        ages={element.charac.ages}
                        dateTime={element.charac.dateTime}
                        duration={element.charac.duration}
                        wpp={element.charac.wpp}
                        key={`${element.wpp}_${i}`}
                     />
                  )}
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