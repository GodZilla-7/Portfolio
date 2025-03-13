import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Dock from "./components/Dock";
import Footer from "./components/footer";
import Collab from "./components/collab";
function App() {
  return (
    <div className="container-sm" >
        <Header />
      <div className="container-sm flex items-center flex-col">
        <Profile />
        <Projects/>
        <Collab/>
        <Skills />
        <Footer/>
        <Dock />
      </div>
    </div>
  );
}

export default App;
