import '../styles/Header.css';

export function Header() {
  return (
    <nav className='nav-container'>
        <div><a href="#home">logo</a></div>
        <ul className='nav-links'>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#proyects">Proyects</a></li>
            <li><a href="">About me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}
