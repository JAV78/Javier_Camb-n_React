import React from "react";
import Item from "./Item";

const ItemList = ({ productsCoffe }) => {
  return (
    <div>
      {products.map((productsCoffe) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};  

export default ItemList;