import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import CartPage from "./components/Cart/CartPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import NotFound from "./pages/NotFound";
import ProductPage from "../src/Pages/ProductPage";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import AboutUs from "./Pages/AboutUs";
import FAQ from "./Pages/FAQ";
import ForgotPassword from "./Pages/ForgotPassword";
import { AuthProvider } from "../src/Context/AuthContext";
import { CartProvider } from "../src/Context/CartContext";
import { SearchProvider } from "../src/Context/SearchContext";
import "./App.css";

function App() {

  return (
    <AuthProvider>
      <CartProvider>
       <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>
        </Router>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
