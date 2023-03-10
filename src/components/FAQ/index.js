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
                        <div><h3>¿Hay cupos limitados en las actividades de Fit Club?</h3></div >
                        <div className='answer'>-Sí! Para consultar si hay lugar nos podés escribir al WhatsApp de Fit Club.</div>
                    </div >
                    <div className='FAQ-right'>
                        <div><h3>¿Vamos a actuar en el teatro?</h3></div >
                        <div className='answer'>-Sí! A fin de año se realiza una muestra tanto de Comedia Musical como de Fit Club (baile).</div>
                    </div >
                    {/* <div className='FAQ-left'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>

                    </div >
                    <div className='FAQ-right'>
                        <div><h3>pregunta pregunta</h3></div >
                        <div className='answer last-answer'>respuesta respuesta respuesta respuesta respuesta respuesta respuesta</div>
                    </div > */}
                </div>
            </div>

            <div className='FAQ-container'>
                <div className='FAQ-title'>
                    <h2>COMEDIA MUSICAL</h2>
                </div>

                <div className='FAQ-content'>
                    <div className='FAQ-left'>
                        <div className='question'><h3>¿En Comedia Musical puedo elegir un sólo taller?</h3></div >
                        <div className='answer'>- No, los talleres son complementarios.
                            Son dos estímulos semanales que les permitirán desarrollar y adquirir el manejo de las disciplinas que conforman la comedia musical.
                        </div>
                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>¿Hay horarios por la mañana para adultos de Comedia Musical?</h3></div >
                        <div className='answer'>-No, para adultos hay un sólo horario. Lunes y miércoles 13:30h.</div>
                    </div >
                    <div className='FAQ-left'>
                        <div className='question'><h3>¿Tengo que tener experiencia para empezar Comedia Musical?</h3></div >
                        <div className='answer'>-No, no hace falta tener experiencia.
                            Sólo se necesita compromiso y ganas de divertirse.
                        </div>
                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>¿Taller de canto para adultos hay?</h3></div >
                        <div className='answer last-answer'>-No, por el momento no vamos a tener exclusivamente un taller de canto para adultos, pero sí vamos a tener clases especiales con un profesional durante el año.</div>
                    </div >
                    <div className='FAQ-left'>
                        <div className='question'><h3>¿Hay descuento por familia en Comedia Musical?</h3></div >
                        <div className='answer'>-Sí!
                            1º integrante cuota COMPLETA.
                            2º integrante 20% menos.
                            3º integrante 40% menos
                        </div>
                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>¿Hay cupos limitados en las actividades de Fit Club?</h3></div >
                        <div className='answer last-answer'>-Sí! Para consultar si hay lugar nos podés escribir al WhatsApp de Fit Club.</div>
                    </div >
                    <div className='FAQ-left'>
                        <div className='question'><h3>¿Vamos a actuar en el teatro?</h3></div >
                        <div className='answer'>-Sí! A fin de año se realiza una muestra tanto de Comedia Musical como de Fit Club (baile).</div>
                    </div >
                    <div className='FAQ-right'>
                        <div className='question'><h3>¿Qué es danza escénica?</h3></div >
                        <div className='answer last-answer'>-El taller de danza escénica trabaja fundamentalmente utilizando el cuerpo y el movimiento para representar un tema, una idea, un concepto, incluso un sentimiento.
                            Se hace hincapié en la expresividad, en la interpretación de lo que se está bailando.
                        </div>
                    </div >
                    <div className='FAQ-left'>
                        <div className='question'><h3>¿Qué les enseñan a los niños de 4 años?</h3></div >
                        <div className='answer'>-Enseñamos a través del juego, aprendemos poniendo el cuerpo, sonidos, imágenes visuales y gestos. Tenemos diferentes objetivos para las disciplinas (no es solo ensayar la obra de fin de año).
                            En el baile practicamos el sentido rítmico y la psicomotricidad. Utilizamos todo el cuerpo y trabajamos aspectos como la fuerza, coordinación, flexibilidad, equilibrio, el control espacial, la armonía y concentración.
                            En el teatro aprendemos a ponernos en el lugar del otro representando diferentes papeles y observando a los compañeros. Aprendemos a manejar nuestra voz (intención, proyección y vocalización), a crear y modificar.
                            El teatro estimula la imaginación (trabajamos con títeres y nos personalizamos/caracterizamos).
                            En la música aprendemos a escucharnos y escuchar a los demás. Realizamos juegos rítmicos con sonidos o la voz.
                            Descubrimos los atributos de la música (tono, timbre, intensidad y duración).
                            Conocemos, construimos y tocamos instrumentos musicales.
                            Hacemos música con el cuerpo.
                        </div>
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