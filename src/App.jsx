import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart";
import Item from "./components/ItemListContainer/Item";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Isla Café" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/cafe" element={<ItemListContainer greeting="Café" category="cafe" />} />
          <Route path="/salado" element={<ItemListContainer greeting="Salado" category="salado" />} />
          <Route path="/dulce" element={<ItemListContainer greeting="Dulce" category="dulce" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;