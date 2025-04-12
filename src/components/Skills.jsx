import React from "react";
import Skillcard from "./SkillCard";
const Skills = () => {
  return (
    <div className="album py-5 flex flex-col items-center">
    <h1 className="display-6 mb-5 mx-2 font-bold">Skills</h1>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><Skillcard title="HTML" img="./skills/html.png"/></a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><Skillcard title="CSS" img="./skills/css.png"/></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><Skillcard title="JS" img="./skills/js.png"/></a>
    <a href="https://www.mongodb.com/docs/" target="_blank"><Skillcard title="MongoDB" img="./skills/mongodb.svg"/></a>
    <a href="https://expressjs.com/" target="_blank"> <Skillcard title="expressJS" img="./skills/express.png"/></a>
    <a href="https://react.dev/" target="_blank"><Skillcard title="React.js" img="./skills/react.png"/></a>
    <a href="https://nodejs.org/docs/latest/api/" target="_blank"> <Skillcard title="nodeJS" img="./skills/node.png"/></a>
    <a href="https://threejs.org/docs/index.html" target="_blank"> <Skillcard title="3JS" img="./skills/3js.png"/></a>
    <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"> <Skillcard title="Tailwind" img="./skills/tailwind.png"/></a>
    <a href="https://dev.mysql.com/doc/" target="_blank"> <Skillcard title="MySQL" img="./skills/mysql.png"/></a>
    <a href="https://devdocs.io/c/" target="_blank"> <Skillcard title="C" img="./skills/c.png"/></a>
    <a href="https://devdocs.io/cpp/" target="_blank"> <Skillcard title="C++" img="./skills/cpp.png"/></a>
</div>
</div>
  );
};

export default Skills;
