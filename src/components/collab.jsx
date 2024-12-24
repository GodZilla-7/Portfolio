import React from "react";
import Card from "./Card";
import CardP from "./CardP";
function Collab(){
    return (
        <div className="album py-5 flex flex-col items-center border-bottom">
                  <h1 className="display-6 mb-5 mx-2">Contribution</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <Card source="https://github.com/GodZilla-7/Whatsapp_qr" live="https://whatsappqr.up.railway.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project1.png"/>
                <Card source="https://github.com/GodZilla-7/Whatsapp_qr" live="https://whatsappqr.up.railway.app/" title="hello" content="erlkadfnv;lnvoaj;ndvldsnvlknfm" img="./projects/project1.png"/>
            </div>
        </div>
    );
};

export default Collab;

