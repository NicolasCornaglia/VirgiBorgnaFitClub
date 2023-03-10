import './index.scss'
import React from 'react';
import { useState } from 'react';
import Professor from '../Professor'


function Activity(props) {
   let profArr = props.professors;
   const [isActive, setActive] = useState(false);

   const toggleClass = () => {
      setActive(!isActive);
   };

   return (
      <>
         <div className='card' >
            <div className='card-bg'>
               <div onClick={toggleClass} className='card-img'>
                  <img src={props.classImg} alt='fitDanceAdultosImg' />
                  <p className='class-title'>{props.classTitle}</p>
               </div>
               <div className={isActive ? 'card-content show-content' : 'card-content'} >
                  <div className='card-title'>
                     <div className='card-title-text'>{props.classTitle}</div>
                  </div>

                  <div className='card-description'>
                     <span className='card-subtitle '>Descripcción:</span> 
                     <div className='card-summary'>
                        {props.classDescription}
                     </div>
                  </div>
                  <div className='prof-char'>
                     <div className='professors-container'>
                        <span className='card-subtitle '>Profesores:</span> 
                        <div className='professors'>
                           {profArr.map((prof, i) => (<Professor name={prof.name} img={prof.img} key={`${prof.name}_${i}`} />))}
                        </div>
                     </div>
                     <div className='card-characteristics'>
                        <span className='card-subtitle '>Características:</span> 
                        <div className='card-characteristics-columns'>
                           <div className='ch-first-column'>
                              <div className='card-date-time'><svg className='svg-icon' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z"></path></g></svg><span className='card-icon-subtitle'>  Dias y horario:</span> fecha y hora</div>
                              <div className='card-ages'><svg className='svg-icon' viewBox="0 0 32 32" id="Lager_47" data-name="Lager 47" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_55" data-name="Path 55" d="M27.2,12h-.279A8,8,0,1,0,12,8,7.99,7.99,0,0,0,5.079,20H4.8A7.835,7.835,0,0,0,0,26.926V30a2.588,2.588,0,0,0,1.938,2H22.25c.83,0,1.75-1.3,1.75-2V26.926A6.9,6.9,0,0,0,23.32,24h6.93c.83,0,1.75-1.3,1.75-2V18.926A7.835,7.835,0,0,0,27.2,12ZM20,4a4,4,0,1,1-1.2,7.8A8.018,8.018,0,0,0,16.2,9.2,3.948,3.948,0,0,1,20,4Zm-8,8a4,4,0,1,1-3.932,4.677A3.589,3.589,0,0,1,8,16,4,4,0,0,1,12,12Zm8,16H4V26.926A3.713,3.713,0,0,1,5.8,24H18.2A3.713,3.713,0,0,1,20,26.926Zm8-8H18.921A7.955,7.955,0,0,0,20,16h6.2A3.713,3.713,0,0,1,28,18.926Z" fill="#040505"></path> </g></svg><span className='card-icon-subtitle'>Edades:</span> edad</div>
                           </div>
                           <div className='ch-second-column'>
                              <div className='card-length'><svg className='svg-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2"></path> <path d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg><span className='card-icon-subtitle'>Duración: </span> tiempo</div>
                              <div className='card-level'><svg className='svg-icon' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5,44C2.8,44,2,44.7,2,45.5v3C2,49.3,2.8,50,3.5,50h23.9c0.8,0,1.6-0.8,1.6-1.5V15.3c0-0.9,1-1.3,1.7-0.7 l5.6,5.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1C40.5,16,27,2.4,27,2.4c-0.6-0.6-1.5-0.6-2.1,0L11.4,15.9 c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l5.6-5.6c0.6-0.6,1.8-0.2,1.8,0.7v27.3c0,1.6-1.6,1.5-1.6,1.5H3.5z"></path> </g></svg><span className='card-icon-subtitle'>Nivel:</span> nivel</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Activity
