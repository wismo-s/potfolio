import '../styles/Header.css';
import { icon } from '../assets/Images';

export function Header() {
  return (
    <nav className='nav-container'>
        <div className='icon-container'><a href="#home"><img src={icon} alt="" /></a></div>
        <ul className='nav-links'>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#proyects">Proyects</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}
