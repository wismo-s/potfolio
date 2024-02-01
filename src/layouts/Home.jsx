import '../styles/Home.css'
import { Github, Linkedin } from 'react-bootstrap-icons'
import { gifs } from '../assets/Images'
export function Home() {
  return (
    <section id="home" className='home-container'>
      <div className='home-info'>
        <h1>Hi! I'm wismo</h1>
        <h2><span>≥</span> Frontend Developer</h2>
        <div className='home-buttons'>
          <a href="https://github.com/wismo-s" target="_blank">
            <Github color='#ccc4ff' size={22} className='icons-button'></Github>
            Github
          </a>
          <a href="https://www.linkedin.com/in/stephano-yparraguirre-5a2029296/" target="_blank">
            <Linkedin color='#ccc4ff' size={22} className='icons-button'></Linkedin>
            Linkedin
          </a>
        </div>
      </div>
      <div className='home-hollow'>
        <img src={gifs.hollow} alt="" />
      </div>
    </section>
  )
}