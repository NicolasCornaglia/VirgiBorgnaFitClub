import './index.scss'
import Footer from '../Footer'
import News from '../News'

const NewsPage = () => {

   return (
      <>
         <div className='header-bg'></div>
         <div className='news-page-container'>
            <News />
         </div>

         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default NewsPage