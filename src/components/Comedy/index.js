import React from 'react';
import './index.scss';
import Footer from '../Footer';
import Activity from '../Activity';
import fitComedyKidsIImg from '../../assets/img/comedy_optimized/454.JPG';
import fitComedyKidsIIImg from '../../assets/img/comedy_optimized/517.JPG';
import fitComedyKidsIIIImg from '../../assets/img/comedy_optimized/664.JPG';
import fitComedyAdultsIImg from '../../assets/img/comedy_optimized/213.JPG';
import fitComedyAdultsIIImg from '../../assets/img/comedy_optimized/588.JPG';

const Comedy = () => {
   const class1 = {
      image: fitComedyKidsIImg,
      title: 'Comedia Musical Kids I',
      desc: 'En comedia musical kids queremos lograr un espacio donde la creatividad, el juego, la música, la danza y la actuación se conviertan en los principales actores. Trabajamos su confianza para poder brillar arriba y abajo del escenario. Aprovechá los escuentos por familia: 2º integrante 20% menos. 3º integrante 40% menos.',
      prof: [
         {
            name: 'Rocío Pecantet',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Leandro Quiñones',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Jorgelina Saluzzio',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Candela Innocenti',
            img: fitComedyKidsIImg,
         },
      ],
      charac: {
         ages: 'de 4 a 6 años',
         dateTime: 'Lunes y miércoles 17:30h',
         duration: '1H',
         wpp: '5493492289969',
      },
      enroll: 'https://forms.gle/Giac9dSFZvqrpXCR7',
   };

   const class2 = {
      image: fitComedyKidsIIImg,
      title: 'Comedia Musical Kids II',
      desc: 'En comedia musical kids queremos lograr un espacio donde la creatividad, el juego, la música, la danza y la actuación se conviertan en los principales actores. Trabajamos su confianza para poder brillar arriba y abajo del escenario. Aprovechá los escuentos por familia: 2º integrante 20% menos. 3º integrante 40% menos.',
      prof: [
         {
            name: 'Rocío Pecantet',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Leandro Quiñones',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Jorgelina Saluzzio',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Candela Innocenti',
            img: fitComedyKidsIImg,
         },
      ],
      charac: {
         ages: 'de 7 a 9 años',
         dateTime: 'Lunes y miércoles 18:30h',
         duration: '1H',
         wpp: '5493492289969',
      },
      enroll: 'https://forms.gle/Giac9dSFZvqrpXCR7',
   };

   const class3 = {
      image: fitComedyKidsIIIImg,
      title: 'Comedia Musical Pre Teens',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical. Aprovechá los escuentos por familia: 2º integrante 20% menos. 3º integrante 40% menos.',
      prof: [
         {
            name: 'Rocío Pecantet',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Valentina Oregioni',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Alicia Mondino',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Virginia Borgna',
            img: fitComedyKidsIImg,
         },
      ],
      charac: {
         ages: 'de 10 a 13 años',
         dateTime: 'Martes y jueves 18:30h',
         duration: '1H',
         wpp: '5493492289969',
      },
      enroll: 'https://forms.gle/Giac9dSFZvqrpXCR7',
   };

   const class4 = {
      image: fitComedyAdultsIImg,
      title: 'Comedia Musical Adultos I',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical. Aprovechá los escuentos por familia: 2º integrante 20% menos. 3º integrante 40% menos.',
      prof: [
         {
            name: 'Rocío Pecantet',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Valentina Oregioni',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Jorgelina Saluzzio',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Virginia Borgna',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Alicia Mondino',
            img: fitComedyKidsIImg,
         },
      ],
      charac: {
         ages: 'De 15 a 35 años.',
         dateTime: 'Lunes y miércoles 20:30h',
         duration: '1H',
         wpp: '5493492289969',
      },
      enroll: 'https://forms.gle/9a1HWNbKrfM9Drn29',
   };

   const class5 = {
      image: fitComedyAdultsIIImg,
      title: 'Comedia Musical Adultos II',
      desc: 'Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical. Aprovechá los escuentos por familia: 2º integrante 20% menos. 3º integrante 40% menos.',
      prof: [
         {
            name: 'Rocío Pecantet',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Valentina Oregioni ',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Virginia Borgna',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Jorgelina Saluzzio',
            img: fitComedyKidsIImg,
         },
         {
            name: 'Alicia Mondino',
            img: fitComedyKidsIImg,
         },
      ],
      charac: {
         ages: 'De 35 años en adelante.',
         dateTime: 'Lunes y miércoles 13:30h',
         duration: '1H',
         wpp: '5493492289969',
      },
      enroll: 'https://forms.gle/9a1HWNbKrfM9Drn29',
   };

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
                  {classes.map((element, i) => <Activity
                     classImg={element.image}
                     classTitle={element.title}
                     classDescription={element.desc}
                     professors={element.prof}
                     ages={element.charac.ages}
                     dateTime={element.charac.dateTime}
                     duration={element.charac.duration}
                     wpp={element.charac.wpp}
                     enroll={element.enroll}
                     key={`${element.wpp}_${i}`}
                  />)};
               </div>
            </div>
         </div>

         <footer>
            <Footer />
         </footer>
      </>
   );
};

export default Comedy;
