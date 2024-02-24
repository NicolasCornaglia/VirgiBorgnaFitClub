import React from 'react';
import './index.scss';
import Footer from '../Footer';
import Activity from '../Activity';
import fitDanceAdultosImg from '../../assets/img/dance_optimized/IMG_8671.JPG';
import fitDanceKidsMañana from '../../assets/img/dance_optimized/IMG_1712.JPG';
import fitDanceKidsIImg from '../../assets/img/dance_optimized/IMG_8020.JPG';
import fitDanceKidsIIImg from '../../assets/img/dance_optimized/IMG_1696.JPG';
import fitDanceKidsTeensImg from '../../assets/img/dance_optimized/c40d4905-405c-4cc3-9494-c1ea99db3f10.jpg';
import fitDanceStreetBImg from '../../assets/img/dance_optimized/IMG_1603.JPG';
import fitDanceStreetAImg from '../../assets/img/dance_optimized/IMG_1614.JPG';
import fitDanceStreetTeensImg from '../../assets/img/dance_optimized/IMG_1606.JPG';
import fitDanceSalsaImg from '../../assets/img/dance_optimized/IMG_9194.jpg';
import fitDanceBachataImg from '../../assets/img/dance_optimized/IMG_8719.JPG';
import fusionDanceImg from '../../assets/img/IMG_funsion-dance.JPG';

const class1 = {
  image: fitDanceAdultosImg,
  title: 'Fit Dance adultos',
  desc: 'Fit Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.',
  prof: [
    {
      name: 'Virginia Borgna',
      img: fitDanceAdultosImg,
    },
  ],
  charac: {
    ages: '17 años en adelante.',
    dateTime:
      'Lunes 19:30hs / Miércoles 8:00hs y 19:30hs / Martes y Jueves 13:15hs | 19:30hs / Viernes 8:00hs',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: '',
};

const class2 = {
  image: fitDanceKidsMañana,
  title: 'Dance Kids I',
  desc: 'Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.',
  prof: [],
  charac: {
    ages: 'De 4 a 6 años.',
    dateTime: 'Turnos mañana y tarde, consultar horario.',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: 'https://forms.gle/D2ziGV6qMbNp3TTi6',
};

const class3 = {
  image: fitDanceKidsIImg,
  title: 'Dance Kids II',
  desc: 'Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.',
  prof: [],
  charac: {
    ages: 'De 7 a 9 años.',
    dateTime: 'Turnos mañana y tarde, consultar horario.',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: 'https://forms.gle/D2ziGV6qMbNp3TTi6',
};

const class4 = {
  image: fitDanceKidsIIImg,
  title: 'Dance pre teens',
  desc: 'Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.',
  prof: [],
  charac: {
    ages: 'De 10 a 12 años.',
    dateTime: 'Turnos mañana y tarde, consultar horario.',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: 'https://forms.gle/D2ziGV6qMbNp3TTi6',
};

const class5 = {
  image: fitDanceKidsTeensImg,
  title: 'Dance teens',
  desc: 'Dance conjuga entrenamiento y danza, convirtiéndola en una actividad aeróbica, divertida y placentera, utilizando el baile como eje motivador. Se destaca el trabajo con coreografías ideadas y pensadas en relación a la forma musical que acompaña el ejercicio y el movimiento, utilizando determinados músculos y posturas corporales. Durante la clase, se suceden distintas intensidades de trabajo que generan cambios en la frecuencia cardíaca.',
  prof: [],
  charac: {
    ages: 'De 13 a 15 años.',
    dateTime: 'Consultar horario.',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: 'https://forms.gle/D2ziGV6qMbNp3TTi6',
};

const class6 = {
  image: fitDanceStreetBImg,
  title: 'Street nivel básico - principiante',
  desc: 'Street Dance es una actividad en la que se aprende y entrena diversas coreografías fusionando diferentes lenguajes y estilos, entre ellos hip hop, dancehall, reggaetón (fusión), jazz funk, tutting, femme, entre otros; comprendiendo tanto movimientos libres y fluidos como lineales y técnicos. A través de ejercicios técnicos entrenamos la disociación, memorización y control del cuerpo. Las coreografías se preparan en base al nivel de los grupos y tiene como objetivo aprender, superarse, divertirse y compartir.',
  prof: [
    {
      name: 'Natalia Reynaudo',
      img: fitDanceAdultosImg,
    },
  ],
  charac: {
    ages: 'Sin limite.',
    dateTime: 'Lunes y Miércoles 14:30hs.',
    duration: '1h',
    wpp: '5493401416919',
  },
  enroll: '',
};

const class7 = {
  image: fitDanceStreetAImg,
  title: 'Street nivel principiante - avanzado',
  desc: 'Street Dance es una actividad en la que se aprende y entrena diversas coreografías fusionando diferentes lenguajes y estilos, entre ellos hip hop, dancehall, reggaetón (fusión), jazz funk, tutting, femme, entre otros; comprendiendo tanto movimientos libres y fluidos como lineales y técnicos. A través de ejercicios técnicos entrenamos la disociación, memorización y control del cuerpo. Las coreografías se preparan en base al nivel de los grupos y tiene como objetivo aprender, superarse, divertirse y compartir.',
  prof: [
    {
      name: 'Natalia Reynaudo',
      img: fitDanceAdultosImg,
    },
  ],
  charac: {
    ages: 'Sin limite.',
    dateTime: 'Martes y jueves 20:30hs.',
    duration: '1h',
    wpp: '5493401416919',
  },
  enroll: '',
};

const class8 = {
  image: fitDanceStreetTeensImg,
  title: 'Street dance teens',
  desc: 'Street Dance es una actividad en la que se aprende y entrena diversas coreografías fusionando diferentes lenguajes y estilos, entre ellos hip hop, dancehall, reggaetón (fusión), jazz funk, tutting, femme, entre otros; comprendiendo tanto movimientos libres y fluidos como lineales y técnicos. A través de ejercicios técnicos entrenamos la disociación, memorización y control del cuerpo. Las coreografías se preparan en base al nivel de los grupos y tiene como objetivo aprender, superarse, divertirse y compartir.',
  prof: [],
  charac: {
    ages: 'A partir de los 16 años.',
    dateTime: 'Turnos mañana y tarde, consultar horario.',
    duration: '1h',
    wpp: '5493401416919',
  },
  enroll: '',
};

const class9 = {
  image: fitDanceSalsaImg,
  title: 'Salsa en pareja',
  desc: 'Tanto en bachata como en salsa se trabaja en pareja e individualmente. Las clases son muy dinámicas, se aprende la técnica individual y básica de cada ritmo. No es necesario venir con pareja.',
  prof: [],
  charac: {
    ages: 'Sin limite.',
    dateTime: 'Lunes 21:30hs.',
    duration: '1h',
    wpp: '5493492595321',
  },
  enroll: '',
};

const class10 = {
  image: fitDanceBachataImg,
  title: 'Bachata',
  desc: 'Tanto en bachata como en salsa se trabaja en pareja e individualmente. Las clases son muy dinámicas, se aprende la técnica individual y básica de cada ritmo. No es necesario venir con pareja.',
  prof: [],
  charac: {
    ages: 'Sin limite.',
    dateTime: 'Miércoles 21:30hs.',
    duration: '1h',
    wpp: '5493492565355',
  },
  enroll: '',
};

const class11 = {
  image: fusionDanceImg, // falta agregart imagen aqui.
  title: 'Fusión Dance',
  desc: 'Como su nombre lo sugiere Fusión Dance se deleita en la mezcla de estilos de baile y músicas variadas. En esta disciplina la expresión libre, la conexión y la musicalidad son protagonistas. Veni a bailar y disfrutar de una clase divertida, sencilla, donde priorizamos movernos y pasarla bien. Movete sin límites .',
  prof: [],
  charac: {
    ages: 'De 40 años en adelante.',
    dateTime: 'Turnos mañana y tarde, consultar horario.',
    duration: '1h',
    wpp: '5493492289969',
  },
  enroll: '',
};

// const class12 = {
//   image: fitDanceBachataImg, // falta agregart imagen aqui.
//   title: 'Taller DESAFIARTE',
//   desc: 'DesafiARTE es un espacio recreativo destinado a personas con discapacidad,
//     a partir de los 18 años. Se busca promover y potenciar el autoconocimiento,
//     a través de la participación en actividades de ocio y conectando con el arte.
//     Las propuestas están pensadas en la participación plena de todos, por lo que se
//     tendrán en cuenta las singularidades de cada adulto. En desafiARTE apostamos al
//     aprendizaje desde la experiencia con otros para autoconocernos, disfrutar, potenciar
//     habilidades sociales, motrices, estimular los sentidos y de esta manera ENCONTRAR TALENTOS
//     en cada persona, desde el trabajo en grupo.',
//   prof: [
//     {
//     name: 'Candela Innocenti (acompañante terapéutica)',
//     img: fitDanceAdultosImg,
//     },
//     {
//       name: 'Emilia Basano (terapista ocupacional)',
//       img: fitDanceAdultosImg,
//     },
//   ],
//   charac: {
//     ages: 'De 18 años en adelante',
//     dateTime: 'viernes 16:00hs.',
//     duration: '1h 30min',
//     wpp: '5493492289969',
//   },
//   enroll: 'https://forms.gle/8E7ResjARjLq4tgn6',
// };

const Dance = () => {
   const classes = [
      class1,
      class2,
      class3,
      class4,
      class5,
      class6,
      class7,
      class8,
      class9,
      class10,
      class11,
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
            {classes.map((element, i) => (
              <Activity
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
              />
            ))}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
   );
};

export default Dance;
