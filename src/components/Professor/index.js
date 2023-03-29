import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Professor = (props) => {
   const doNothing = (e) => {
      e.preventDefault();
   };
   return (
      <div className='professor' key={`${props.name}`}>
         <a href='/' onClick={doNothing}>
            <img src={props.img} alt='professor-img' className='professor-img' loading='lazy' />
            <div className='professor-name'>
               <div>{props.name}</div>
            </div>
         </a>
      </div>
   );
};

Professor.propTypes = {
   name: PropTypes.string.isRequired,
   img: PropTypes.object.isRequired,
};

export default Professor;
