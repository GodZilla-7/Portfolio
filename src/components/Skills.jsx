import React from "react";
import Skillcard from "./SkillCard";
const Skills = () => {
  return (
    <div className="album py-5 flex flex-col items-center">
    <h1 className="display-6 mb-5 mx-2">Skills</h1>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    <Skillcard title="HTML" img="./skills/html.png"/>
    <Skillcard title="CSS" img="./skills/css.png"/>
    <Skillcard title="JS" img="./skills/js.png"/>
    <Skillcard title="React.js" img="./skills/react.png"/>
    <Skillcard title="C" img="./skills/c.png"/>
    <Skillcard title="C++" img="./skills/cpp.png"/>
    <Skillcard title="C" img="./skills/c.png"/>
    <Skillcard title="C++" img="./skills/cpp.png"/>
    <Skillcard title="C" img="./skills/c.png"/>
    <Skillcard title="C++" img="./skills/cpp.png"/>
</div>
</div>
  );
};

export default Skills;
