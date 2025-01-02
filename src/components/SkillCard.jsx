import React from "react";
 function Skillcard(props){
    return(
        <div className="col">
        <div className="card shadow-sm flex flex-col items-center py-4">
          <img className=" h-20 fit-content" src={props.img}/>
          <title>Placeholder</title>
         
          <div className="card-body">
            <p className="card-text">{props.title}</p>
          </div>
        </div>
      </div>
    );
 }


 export default Skillcard;