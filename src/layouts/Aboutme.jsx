import '../styles/about.css';
export function Aboutme() {
  return (
    <section id="about" className="seccion-container">
        <h2 className='seccion-title'>About me</h2>
        <div className='about-info'>
            <div className='about-img-container'>
                <img src="src/assets/about.gif" alt="" />
            </div>
            <div className='about-text-container'>
                <p><strong>Junior Developer</strong>, with a lot of desire to learn more every day and with the desire to get to do something great in the future as a <strong>Web Developer</strong>.</p>
                <p>I'm a second-year student of the computer and IT technical degree in <strong>Cibertec</strong>.</p>
            </div>
        </div>
    </section>
  )
}
