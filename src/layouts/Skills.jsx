import '../styles/skills.css'
import { tecnologies } from '../assets/Images'
export function Skills() {
  return (
    <section id="skills" className="seccion-container">
        <h2 className='seccion-title'>Skills</h2>
        <div className='skills-grid-container'>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.html} alt="HTML" /></div>
                <span>HTML</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.css} alt="CSS" /></div>
                <span>CSS</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.bootstrap} alt="Boostrap" /></div>
                <span>Boostrap</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.tailwind} alt="Tailwind" /></div>
                <span>Tailwind</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.sass} alt="SASS" /></div>
                <span>SASS</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.git} alt="git" /></div>
                <span>git</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.js} alt="JavaScript" /></div>
                <span>JavaScript</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.react} alt="React" /></div>
                <span>React</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.vite} alt="Vite" /></div>
                <span>Vite</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.npm} alt="npm" /></div>
                <span>npm</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.java} alt="java" /></div>
                <span>java</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.python} alt="python" /></div>
                <span>python</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.django} alt="Django" /></div>
                <span>Django</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src={tecnologies.postgrest} alt="PostgreSQL" /></div>
                <span>PostgreSQL</span>
            </article>
        </div>
    </section>
  )
}