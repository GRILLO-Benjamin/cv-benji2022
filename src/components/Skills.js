import React from "react"
import Skill from "./Skill"
import Interests from "./Interests"
import "./Skills.css"

function Skills() 
{
    return (
    <>
    <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="2" />
        <Skill title="SYMFONY" rating="2" />
    </div>
    <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="5" />
        <Skill title="Chinois" rating="3" />
    </div>
    <Interests />
    </>
    )
}

export default Skills