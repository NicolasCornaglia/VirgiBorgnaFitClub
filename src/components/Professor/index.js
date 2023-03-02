import './index.scss';
import PropTypes from 'prop-types';

const Professor = (props) => {
   return (
      <div className='professor' key={`${props.name}`}>
         <a href='https://instagram.com'>
            <img src={props.img} alt='professor-img' className='professor-img' />
            <div className='professor-name'>
               <div>{props.name}</div>
            </div>
         </a>
      </div>
   )
}

export default Professor;

