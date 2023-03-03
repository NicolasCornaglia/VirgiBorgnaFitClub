import './index.scss'
import Footer from '../Footer'

const FAQ = () => {
    return (
        <>
            <div className='header-bg'></div>

            <div className='FAQ-container'>
                <div className='FAQ-title'>
                    <h2>BAILE</h2>
                </div>

                <div className='FAQ-content'>
                    <div className='FAQ-left'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                    <div className='FAQ-right'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                    <div className='FAQ-left'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>

                    </div >
                    <div className='FAQ-right'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer last-answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                </div>
            </div>

            <div className='FAQ-container'>
                <div className='FAQ-title'>
                    <h2>COMEDIA MUSICAL</h2>
                </div>

                <div className='FAQ-content'>
                    <div className='FAQ-left'>
                        <div className='question'><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                    <div className='FAQ-left'>
                        <div className='question'><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>

                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>pregunta pregunta</h3></div >
                        <div className='answer last-answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div >
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default FAQ