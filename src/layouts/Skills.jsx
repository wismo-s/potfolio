import '../styles/Skills.css'
export function Skills() {
  return (
    <section id="skills" className="skills-container">
        <h2>Skills</h2>
        <div className='skills-grid-container'>
            <article className='skill-item'>
                <div className='skill-img-container'><img src="../assets/css.webp" alt="HTML" /></div>
                <span>HTML</span>
            </article>
        </div>
    </section>
  )
}