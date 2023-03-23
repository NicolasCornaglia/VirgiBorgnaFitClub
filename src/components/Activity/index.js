import './index.scss'
import React from 'react';
import { useState } from 'react';
import Professor from '../Professor'
import professorDefault from '../../assets/img/professorDefault.jpg'

function Activity(props) {
   let profArr = props.professors;
   const [isActive, setActive] = useState(false);

   const toggleClass = () => {
      setActive(!isActive);
   };

   return (
      <>
         <div className='card' key={props.key}>
            <div className='card-bg'>
               <div onClick={toggleClass} className={isActive ? 'card-img bigger-img' : 'card-img'}>
                  <img src={props.classImg} alt='Img' loading='lazy' />
                  <p className='class-title'>{props.classTitle}</p>
               </div>
               <div className={isActive ? 'card-content show-content' : 'card-content'} >
                  <div className='card-title'>
                     <div className='card-title-text'>{props.classTitle}</div>
                  </div>

                  <div className='card-description'>
                     <span className='card-subtitle '>Descripcción:</span>
                     <div className='card-summary'>
                        <p>{props.classDescription}</p>
                     </div>
                  </div>
                  <div className='prof-char'>
                     <div className='professors-container'>
                        <span className='card-subtitle '>Profesores:</span>
                        <div className='professors'>
                           {profArr.map((prof, i) => (<Professor name={prof.name} /* img={prof.img} when we have the photos of the professors, this must be changed */ img={professorDefault} key={`${prof.name}_${i}`} />))}
                        </div>
                     </div>
                     <div className='card-characteristics'>
                        <span className='card-subtitle '>Características:</span>
                        <div className='card-characteristics-columns'>
                           <div className='ch-first-column'>
                              <div className='card-date-time'><span className='card-icon-subtitle'> <svg className='svg-icon' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z"></path></g></svg> Dias y horario:</span> <p className='char-text'>{props.dateTime}</p></div>
                              <div className='card-ages'><span className='card-icon-subtitle'><svg className='svg-icon' viewBox="0 0 32 32" id="Lager_47" data-name="Lager 47" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_55" data-name="Path 55" d="M27.2,12h-.279A8,8,0,1,0,12,8,7.99,7.99,0,0,0,5.079,20H4.8A7.835,7.835,0,0,0,0,26.926V30a2.588,2.588,0,0,0,1.938,2H22.25c.83,0,1.75-1.3,1.75-2V26.926A6.9,6.9,0,0,0,23.32,24h6.93c.83,0,1.75-1.3,1.75-2V18.926A7.835,7.835,0,0,0,27.2,12ZM20,4a4,4,0,1,1-1.2,7.8A8.018,8.018,0,0,0,16.2,9.2,3.948,3.948,0,0,1,20,4Zm-8,8a4,4,0,1,1-3.932,4.677A3.589,3.589,0,0,1,8,16,4,4,0,0,1,12,12Zm8,16H4V26.926A3.713,3.713,0,0,1,5.8,24H18.2A3.713,3.713,0,0,1,20,26.926Zm8-8H18.921A7.955,7.955,0,0,0,20,16h6.2A3.713,3.713,0,0,1,28,18.926Z" fill="#040505"></path> </g></svg>Edades:</span> <p className='char-text'>{props.ages}</p></div>
                           </div>
                           <div className='ch-second-column'>
                              <div className='card-length'><span className='card-icon-subtitle'><svg className='svg-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2"></path> <path d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>Duración: </span> <p className='char-text'>{props.duration}</p></div>
                              <div className='card-level'><span className='card-icon-subtitle'>
                                 <svg className='svg-icon' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.667 30.667" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path> </g> </g></svg>
                                 Whatsapp:</span> <p className='char-text'><a href={`https://wa.me/${props.wpp}`} target="_blank" rel="noopener noreferrer" >+{props.wpp}</a></p></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  { (props.enroll !== '') && (<div className='enroll-button'>
                     <a href={props.enroll} target="_blank" rel="noopener noreferrer" ><div>INSCRIBIRSE A LA CLASE</div></a>
                  </div>) }
                  

               </div>
            </div>
         </div>
      </>
   )
}

export default Activity
