import { Header } from './layouts/Header'
import { Home } from './layouts/Home'
import { Skills } from './layouts/Skills'
import { Proyects } from './layouts/Proyects'
import { Contact } from './layouts/Contact'
import { Footer } from './layouts/Footer'
import { Aboutme } from './layouts/Aboutme'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Skills></Skills>
      <Proyects></Proyects>
      <Aboutme></Aboutme>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
