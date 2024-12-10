import React from "react";
import "./Card.css"
function Card({nombre,imagen,precio}) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <img src={imagen} alt="Imagen" />
      <h3>{precio} </h3>
    </div>
  );
}

export default Card