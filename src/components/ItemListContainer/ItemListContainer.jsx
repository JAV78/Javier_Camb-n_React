import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getProduct from "../../products";

const ItemListContainer = ({ hello }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; 
  
    const fetchProduct = async () => {
      try {
        const result = await getProduct(); 
        if (isMounted) {
          setProducts(result);
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
  
    fetchProduct();
  
    return () => {
      isMounted = false; 
    };
  }, []);   

  return (
    <div>
      <h1>{hello}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <ItemList products={products} /> 
      )}
    </div>
  );
};

export default ItemListContainer;