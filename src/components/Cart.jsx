import React, { useContext } from "react";
import { ItemContext } from "./ItemContext/ItemContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItemCart, clearCart, totalItems, totalPrice } = useContext(ItemContext);

  return (
    <div>
      <h2>Carrito</h2>
      <p>Total de productos: {totalItems}</p>
      <p>Total a pagar: ${totalPrice}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.price} x {item.quantity}
              <button onClick={() => removeItemCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      <Link to="/checkout">Proceder al pago</Link>
    </div>
  );
};

export default Cart;