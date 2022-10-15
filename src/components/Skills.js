import React from "react";
import Skill from "./Skill";
import Interests from "./Interests";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Skills</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="3" />
        <Skill title="NODE" rating="2" />
      </div>
      <div className="skills">
        <h2 className="h2">Languages</h2>
        <Skill title="French" rating="5" />
        <Skill title="English" rating="5" />
        <Skill title="Chinese" rating="2" />
      </div>
      <Interests />
    </>
  );
}

export default Skills;
