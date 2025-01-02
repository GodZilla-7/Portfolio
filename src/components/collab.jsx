import React from "react";
import Card from "./Card";
import CardP from "./CardP";
function Collab(){
    return (
        <div className="album py-5 flex flex-col items-center border-bottom">
                  <h1 className="display-6 mb-5 mx-2 font-bold">Collaborations</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardP live="https://evolve-nitb.vercel.app/"  title="Evolve" content="Contributed on official website for Evolve, MANIT" img="./collab_projects/collab1.png"/>
            <CardP live="https://shopbraze.com/" title="Landing Page" content="A landing page for a budding startup &lsquo;ShopBraze&rsquo;  " img="./projects/project4.png"/>
            </div>
        </div>
    );
};

export default Collab;

