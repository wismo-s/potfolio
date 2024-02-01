import '../styles/Proyects.css'
import { Github } from 'react-bootstrap-icons'
import { tecnologies, projects } from '../assets/Images'
export function Proyects() {
  return (
    <section id="proyects" className='seccion-container'>
        <h2 className='seccion-title'>Proyects</h2>
        <article className='proyect-card'>
            <video src={projects.ecomerce} autoPlay loop controls></video>
            <div className='proyect-card-info'>
              <h2>E-Comerce</h2>
              <p>
              An e-commerce platform for a company specializing in food supplies and essences, where users can view products, make purchases, edit their information, and check the status of their cart     
              </p>
              <h3>Technologies</h3>
              <div className='proyect-tec-container'>
                <div className='tec-item'><img src={tecnologies.html} alt="HTML" /></div>
                <div className='tec-item'><img src={tecnologies.css} alt="CSS" /></div>
                <div className='tec-item'><img src={tecnologies.js} alt="JavaScript" /></div>
                <div className='tec-item'><img src={tecnologies.react} alt="React" /></div>
                <div className='tec-item'><img src={tecnologies.python} alt="python" /></div>
                <div className='tec-item'><img src={tecnologies.django} alt="Django" /></div>
              </div>
              <div className='repo-container'>
                <a className='proyect-repo-button' href="https://github.com/wismo-s/ecomerce-front" target="_blank">
                  <Github color='#ccc4ff' size={22} className='icons-button'></Github>
                  Frontend
                </a>
                <a className='proyect-repo-button' href="https://github.com/wismo-s/ecomerce-dar" target="_blank">
                  <Github color='#ccc4ff' size={22} className='icons-button'></Github>
                  Backend
                </a>
              </div>
            </div>
        </article>
        <article className='proyect-card'>
            <div className='proyect-card-info'>
              <h2>Games shop</h2>
              <p>
              A video game sales store where the user can buy, view developers, genres, manage their cart, and see their invoices
              </p>
              <h3>Technologies</h3>
              <div className='proyect-tec-container'>
              <div className='tec-item'><img src={tecnologies.html} alt="HTML" /></div>
                <div className='tec-item'><img src={tecnologies.css} alt="CSS" /></div>
                <div className='tec-item'><img src={tecnologies.tailwind} alt="Tailwind" /></div>
                <div className='tec-item'><img src={tecnologies.js} alt="JavaScript" /></div>
                <div className='tec-item'><img src={tecnologies.react} alt="React" /></div>
                <div className='tec-item'><img src={tecnologies.python} alt="python" /></div>
                <div className='tec-item'><img src={tecnologies.django} alt="Django" /></div>
              </div>
              <a className='proyect-repo-button' href="https://github.com/wismo-s/games-api-rest" target="_blank"><Github color='#ccc4ff' size={22} className='icons-button'></Github>Repository</a>
            </div>
            <video src={projects.games} autoPlay loop controls></video>
        </article>
    </section>
  )
}