import '../styles/Proyects.css'
import { Github } from 'react-bootstrap-icons'
export function Proyects() {
  return (
    <section id="proyects" className='seccion-container'>
        <h2 className='seccion-title'>PROYECTS</h2>
        <article className='proyect-card'>
            <video src="src/assets/ecomerce.mp4" autoPlay loop controls></video>
            <div className='proyect-card-info'>
              <h2>Ecomerce</h2>
              <p>
              An e-commerce platform for a company specializing in food supplies and essences, where users can view products, make purchases, edit their information, and check the status of their cart     
              </p>
              <h3>Tecnologies</h3>
              <div className='proyect-tec-container'>
                <div className='tec-item'><img src="src/assets/html.webp" alt="HTML" /></div>
                <div className='tec-item'><img src="src/assets/css.webp" alt="CSS" /></div>
                <div className='tec-item'><img src="src/assets/js.webp" alt="JavaScript" /></div>
                <div className='tec-item'><img src="src/assets/react.webp" alt="React" /></div>
                <div className='tec-item'><img src="src/assets/python.webp" alt="python" /></div>
                <div className='tec-item'><img src="src/assets/django.webp" alt="Django" /></div>
              </div>
              <div className='repo-container'>
                <a className='proyect-repo-button' href="https://github.com/wismo-s/ecomerce-front" target="_blank">
                  <Github color='#ccc4ff' size={22} className='icons-button'></Github>
                  frontend
                </a>
                <a className='proyect-repo-button' href="https://github.com/wismo-s/ecomerce-dar" target="_blank">
                  <Github color='#ccc4ff' size={22} className='icons-button'></Github>
                  backend
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
              <h3>Tecnologies</h3>
              <div className='proyect-tec-container'>
                <div className='tec-item'><img src="src/assets/html.webp" alt="HTML" /></div>
                <div className='tec-item'><img src="src/assets/css.webp" alt="CSS" /></div>
                <div className='tec-item'><img src="src/assets/tailwind.webp" alt="Tailwind" /></div>
                <div className='tec-item'><img src="src/assets/js.webp" alt="JavaScript" /></div>
                <div className='tec-item'><img src="src/assets/react.webp" alt="React" /></div>
                <div className='tec-item'><img src="src/assets/python.webp" alt="python" /></div>
                <div className='tec-item'><img src="src/assets/django.webp" alt="Django" /></div>
              </div>
              <a className='proyect-repo-button' href="https://github.com/wismo-s/games-api-rest" target="_blank"><Github color='#ccc4ff' size={22} className='icons-button'></Github>repository</a>
            </div>
            <video src="src/assets/games.mp4" autoPlay loop controls></video>
        </article>
    </section>
  )
}