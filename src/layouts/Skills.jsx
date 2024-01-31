import '../styles/skills.css'
export function Skills() {
  return (
    <section id="skills" className="seccion-container">
        <h2 className='seccion-title'>SKILLS</h2>
        <div className='skills-grid-container'>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/html.webp" alt="HTML" /></div>
                <span>HTML</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/css.webp" alt="CSS" /></div>
                <span>CSS</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/boostrap.webp" alt="Boostrap" /></div>
                <span>Boostrap</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/tailwind.webp" alt="Tailwind" /></div>
                <span>Tailwind</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/sass.webp" alt="SASS" /></div>
                <span>SASS</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/git.webp" alt="git" /></div>
                <span>git</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/js.webp" alt="JavaScript" /></div>
                <span>JavaScript</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/react.webp" alt="React" /></div>
                <span>React</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/vite.webp" alt="Vite" /></div>
                <span>Vite</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/npm.webp" alt="npm" /></div>
                <span>npm</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/java.webp" alt="java" /></div>
                <span>java</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/python.webp" alt="python" /></div>
                <span>python</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/django.webp" alt="Django" /></div>
                <span>Django</span>
            </article>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="src/assets/postgresql-icon.webp" alt="PostgreSQL" /></div>
                <span>PostgreSQL</span>
            </article>
        </div>
    </section>
  )
}