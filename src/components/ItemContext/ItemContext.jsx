import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((Item) => Item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <ItemContext.Provider
      value={{
        cart,
        addToCart,
        removeItemCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};


export default CartProvider;