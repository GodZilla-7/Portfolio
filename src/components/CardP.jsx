import React from "react";
function CardP(props) {
    return (
        <div className="col items-center">
            <div className="card shadow-sm">

                <div className="card-body text-2xl">{props.title}</div>
                <img src={props.img} />
                <div className="card-body">
                    <p className="card-text">{props.content}</p>



                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group my-4">
                            <a target="_blank"  href={props.live} className="btn btn-sm btn-outline-primary">Live</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default CardP;