import './index.scss'
import logo from '../../assets/img/VARIACIÓN-LOGO-GENERAL.png'
import logoMobile from '../../assets/img/VARIACIÓN-LOGo-mobile.png'
import downArrow from '../../assets/img/down-arrow.svg'
import { useState } from 'react'

const Header = () => {
   const [header, setHeader] = useState(false);

   const changeBackground = () => {
      if (window.scrollY > 80) {
         setHeader(true);
      } else {
         setHeader(false);
      }
   }

   const goToBottom = (e) => {
      e.preventDefault();
      document.querySelector('.footer').scrollIntoView({
         behavior: 'smooth'
      });
   }

   const doNothing = (e) => {
      e.preventDefault();
   }

   const goToHome = () => {
      window.location.href='/'
   }

   window.addEventListener('scroll', changeBackground);

   return (
      <div>
         <div className={`header-container-mobile sticky ${header ? 'active' : ''}`}>
            <section className="top-nav">
               <div className='logo-container'>
                  <img src={logoMobile} alt='logo-mobile' className='logo-mobile' onClick={goToHome} />
               </div>
               <input id="menu-toggle" type="checkbox" />
               <label className='menu-button-container' for="menu-toggle">
                  <div className='menu-button'></div>
               </label>
               <ul className="menu">
                  <li><a href='/'>INICIO</a></li>
                  <li><a href='/about'>QUIENES SOMOS</a></li>
                  <li><a href='/news'>NOVEDADES</a></li>
                  <li><a href='/dance'>BAILE</a></li>
                  <li><a href='/comedy'>COMEDIA MUSICAL</a></li>
                  <li><a href='/' onClick={goToBottom} >CONTACTANOS</a></li>
                  <li><a href='/faq'>PREGUNTAS FRECUENTES</a></li>
               </ul>
            </section>

         </div>


         <div className={`header-container-desktop sticky ${header ? 'active' : ''}`}>
            <div className='header-desktop-content'>
               <div className='nav-bar'>
                  <div className='navbar-link'><a href='/'>INICIO</a></div>
                  <div className='navbar-link'><a href='/about'>QUIENES SOMOS</a></div>
                  <div className='navbar-link'><a href='/news'>NOVEDADES</a></div>
                  <div className='navbar-link dropdown'>
                     <a href='/' className='dropbtn'onClick={doNothing}>CLASES <img src={downArrow} alt='downarrow' className='down-arrow' /></a>
                     <div className='dropdown-content'>
                        <a href='/dance' className='navbar-link drop-link'>BAILE</a>
                        <a href='/comedy' className='navbar-link drop-link'>COMEDIA MUSICAL</a>
                     </div>
                  </div>
                  <div className='navbar-link'><a href='/' onClick={goToBottom}>CONTACTANOS</a></div>
                  <div className='navbar-link'><a href='/faq'>PREGUNTAS FRECUENTES</a></div>
               </div>

               <div className='logo-container'>
                  <img src={logo} alt='logo' className='logo' onClick={goToHome} />
               </div>

            </div>

         </div>
      </div>
   )
}


export default Header