import React from "react";
import Card from "../Card/Card"
import productsCoffe from "../../src/products";


function Dulce() {  
  const cafeProducts = productsCoffe.filter((product) => product.categoria === "dulce");
  return (
    <div className="cards">
      {cafeProducts.map((product) => (
        <Card
        key={product.id}
        nombre={product.nombre}
        imagen={product.imagen}
        precio={product.precio}
        />
      ))}      
    </div>
  );
}

export default Dulce