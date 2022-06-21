import React from 'react'
import DataFormations from "../datas/Formations";
import Formations from "./Formations";
import DataExperiences from "../datas/Experiences";
import Experiences from "./Experiences";
import "./FormationsExperiences.css"

function FormationsExperiences() {
   return (
    <>
        <Formations datas={DataFormations}/>
        <Experiences datas={DataExperiences}/>
    </>
  )
}

export default FormationsExperiences