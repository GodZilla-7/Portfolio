import React from "react";
import Card from "./Card";
import CardP from "./CardP";
function Projects(){
    return (
        <div className="album py-5 flex flex-col items-center border-bottom">
                  <h1 className="display-6 mb-5 mx-2">Projects</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                <Card source="https://github.com/GodZilla-7/Whatsapp_qr" live="https://whatsappqr.up.railway.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project1.png"/>
                <CardP source="https://github.com/GodZilla-7/Ecom_calculator" live="https://ecom-calculator.vercel.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project2.png"/>
                <Card source="https://github.com/GodZilla-7/calculator" live="https://calculator-gamma-pearl.vercel.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project3.png"/>
                <CardP source="https://github.com/GodZilla-7/shopBraze" live="https://shopbraze.com/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project4.png"/>
                <Card source="https://github.com/GodZilla-7/cloneYT" live="https://clone-yt-phi.vercel.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project5.png"/>


            </div>
        </div>
    );
};

export default Projects;

