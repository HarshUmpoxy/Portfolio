import './App.css'

import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import ProjectPage from './components/ProjectPage/ProjectPage'
import CodingProfiles from './components/CodingProfile/CodingProfile';


function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <CodingProfiles/>
      <ProjectPage/>
      <Contact/>
    </>
  )
}

export default App
