import './App.css'
import User from "./components/User"
import React from 'react';
import Skills from "./components/Skills"
import Profil from "./components/Profil"
// import Cursus from "./components/FormationsExperiences"
import FormationsExperiences from './components/FormationsExperiences'
import Darkmode from "./components/DarkMode"
// import { Preview, print } from 'react-html2pdf'


function App() 
{
  const handleGenerateCV = () =>
  {
    let cvTemplate = document.getElementById("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    cvTemplate.classList.add('cv-print')
    document.body.classList.remove("dark")
    setTimeout(()=> 
    {
      // print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:100% !important")
      cvTemplate.classList.remove('cv-print')

    }, 300)
  }
  return ( 
/* <Preview id={'cv-print'} > */
  <div className="App">
    <div className='grid__container'>
      <div className='sidebar'>
        <div className='action'>
          <Darkmode />
          {/* <button onClick={handleGenerateCV}>print</button> */}
        </div>
        <User />
        <Skills />
      </div>
      <div className='main'>
        <Profil />
        <FormationsExperiences />
      </div>
    </div>

    
    {/* react, material ui, react-html2pdf */}
    {/* variable css */}
    {/* colonne de gauche */}
    {/* détails personnels - User */}
    {/* compétences - skills */}
    {/* langues - skills */}
    {/* centre d'interets - interests */}

    {/* colonne de droite */}
    {/* profil - profile */}
    {/* formations - formations */}
    {/* exp - expérience */}

    {/* light / dark mode */}
    {/* generation pdf */}
    </div>
    // </Preview>
  )
}

export default App;
