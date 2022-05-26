import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./component/Navigation";
import AllProducts from "./Pages/AllProduct/AllProducts";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";

import Products from "./Pages/Products/Products";
export const ProductsContext = React.createContext();
export const AddCartContext = React.createContext();

function App() {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res.products));
  }, []);

  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  return (
    <BrowserRouter>
      <Navigation cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductsContext.Provider value={product}>
              {product.length && <Home />}
            </ProductsContext.Provider>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductsContext.Provider value={product}>
              <AddCartContext.Provider value={addToCart}>
                <Products />
              </AddCartContext.Provider>
            </ProductsContext.Provider>
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/products"
          element={
            <ProductsContext.Provider value={product}>
              {product.length && <AllProducts />}
            </ProductsContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
