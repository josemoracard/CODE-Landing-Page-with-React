import React from "react";
import image from "../../img/dark-bg.jpg";

const Card = () => {
    return (
    
<div className="card mb-3"> 
      <img className="card-img-top" src={image} alt="Card image cap" height="250px"/> 
            <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <hr/>
                  <a href="#" className="btn btn-primary w-50 m-auto mb-3">Find Out More!</a>
</div>
)
}


export default Card;