import React from "react";
import Card from "./Card";
import CardP from "./CardP";
function Projects(){
    return (
        <div className="album py-5 flex flex-col items-center border-bottom">
                  <h1 className="display-6 mb-5 mx-2 font-bold">Projects</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <Card 
  source="https://github.com/GodZilla-7/ecom" 
  live="https://ecom-taupe-tau.vercel.app/" 
  title="ShopBraze" 
  content="An e-commerce website offering a stylish collection of female wear with a seamless shopping experience." 
  img="./projects/project0.png"
/>
 <Card 
  source="https://github.com/GodZilla-7/Studify" 
  live="https://studify-chi.vercel.app/" 
  title="Studify" 
  content="Studify helps students with organized resources, effective note-taking, progress tracking, and efficient revision." 
  img="./projects/project8.png"
/>

<Card 
  source="https://github.com/GodZilla-7/TaskFlow_backend" 
  live="https://taaskfloww.vercel.app/" 
  title="TaskFloww" 
  content="A minimalist task manager app boasting sleek design and vibrant dynamic wallpapers for neat pure focus." 
  img="./projects/project7.png"
/>
<CardP 
  source="https://github.com/GodZilla-7/Ecom_calculator" 
  live="https://ecom-calculator.vercel.app/" 
  title="E-com Calculator" 
  content="An Ecom calculator tool that computes optimal selling price and breakeven points with an exact preview." 
  img="./projects/project2.png"
/>

<Card 
  source="https://github.com/GodZilla-7/3d_game" 
  live="https://3d-game-tau.vercel.app/" 
  title="3D Cube game" 
  content="A 3D cube game offering an immersive experience with dynamic graphics and smooth controls for a fun play." 
  img="./projects/project6.png"
/>
<Card 
  source="https://github.com/GodZilla-7/Whatsapp_qr" 
  live="https://whatsappqr.up.railway.app/" 
  title="Whatsapp QR generator" 
  content="Submit a mobile number to instantly create a secure QR code that opens a direct WhatsApp chat connection." 
  img="./projects/project1.png"
/>
<Card 
  source="https://github.com/GodZilla-7/cloneYT" 
  live="https://clone-yt-phi.vercel.app/" 
  title="YT Clone" 
  content="An interactive video clone showcasing a modern layout of engaging media with an ultra crisp design feel." 
  img="./projects/project5.png"
/>

<Card 
  source="https://github.com/GodZilla-7/calculator" 
  live="https://calculator-gamma-pearl.vercel.app/" 
  title="Calculator" 
  content="An calculator app delivering a clever array of basic functions with a smooth operational design for use." 
  img="./projects/project3.png"
/>






            </div>
        </div>
    );
};

export default Projects;

