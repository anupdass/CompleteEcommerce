import React, { createContext, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Order from "./pages/Order/Order";
import Images from "./pages/Image/Images";
import Dinfo from "./pages/Dinfo/Dinfo";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";


export const datacontext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState([])
  return (
    <datacontext.Provider value={{ cart: [cart, setCart], order: [order, setOrder] }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/image" element={<Images />} />
          <Route path="/dinfo" element={<Dinfo />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
        <Cart />
        <Footer />
      </BrowserRouter>
    </datacontext.Provider>
  );
}

export default App;
