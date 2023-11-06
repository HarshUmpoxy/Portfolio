import './App.css'

import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import ProjectPage from './components/ProjectPage/ProjectPage'
import CodingProfiles from './components/CodingProfile/CodingProfile';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
    <div>
      <Header/>
      <div style={{height:'100vh'}} className='flex items-center max-md:mt-60'>
        <Hero/>
      </div>
      <div className='max-md:mt-60'>
      <About/>  
      </div> 
      <CodingProfiles/>
      <div style={{paddingTop:'20vh'}}>
      <ProjectPage/>
      </div>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
