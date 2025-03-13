import React from "react";
import Card from "./Card";
import CardP from "./CardP";
function Projects(){
    return (
        <div className="album py-5 flex flex-col items-center border-bottom">
                  <h1 className="display-6 mb-5 mx-2 font-bold">Projects</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
<Card source="https://github.com/GodZilla-7/ecom" live="https://ecom-taupe-tau.vercel.app/" title="ShopBraze" content="An e-commerce website offering a stylish collection of female wear with a seamless shopping experience" img="./projects/project0.png"/>
            
                <Card source="https://github.com/GodZilla-7/TaskFlow_backend" live="https://taaskfloww.vercel.app/" title="TaskFloww" content="A minimalist to-do website with customizable live wallpaper for a sleek, distraction-free productivity experience." img="./projects/project7.png"/>
                <Card source="https://github.com/GodZilla-7/Whatsapp_qr" live="https://whatsappqr.up.railway.app/" title="Whatsapp QR generator" content="Enter Mobile no to get a qr that redirects to Whatsapp chat" img="./projects/project1.png"/>
                <CardP source="https://github.com/GodZilla-7/Ecom_calculator" live="https://ecom-calculator.vercel.app/" title="E-com Calculator" content="An E-com tool that simplifies Selling price and Break even calculations" img="./projects/project2.png"/>
                <Card source="https://github.com/GodZilla-7/calculator" live="https://calculator-gamma-pearl.vercel.app/" title="Calculator" content="Made a functioning Calculator for learning purpose" img="./projects/project3.png"/>
                <Card source="https://github.com/GodZilla-7/cloneYT" live="https://clone-yt-phi.vercel.app/" title="YT Clone" content="Made a yt clone for learning purpose" img="./projects/project5.png"/>
                <Card source="https://github.com/GodZilla-7/3d_game" live="https://3d-game-tau.vercel.app/" title="3D Cube game" content="Made a 3D game using 3JS" img="./projects/project6.png"/>


            </div>
        </div>
    );
};

export default Projects;

