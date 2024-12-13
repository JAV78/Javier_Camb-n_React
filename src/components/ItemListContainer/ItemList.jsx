import React from "react";
import Item from "./Item";

const ItemList = ({ productsCoffe }) => { 
  if (!Array.isArray(productsCoffe)) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <div>
      {products.map((productsCoffe) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
