import { useParams } from "react-router-dom";
import React from "react";
import ProductCard from "../components/Productcard/ProductCard";
import  aProduct  from "../components/Products/allProducts.js"; // adjust path as needed
import "./ProductPage.css";
import { useCart } from "../Context/CartContext";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const ProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = aProduct?.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const recommended = [...aProduct]
    .filter((item) => item.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4); // 3 extra recommended products

  return (
    <div className="product-page-container">
        <Navbar />
    <div className="product-page">
      <div className="main-product">
        <div className="image-container">
        
        <img src={product.image.toLocaleString()} alt={product.name} />
        </div>
        <div>
          <h2>{product.name}</h2>
          <p>₦{product.price}</p>
          <p>{product.description}</p>
          <button className="butter" onClick={() => addToCart(product.image)}>Add to Cart</button>
        </div>
        
      </div>

      
      <div className="recommended">
        <h3>Recommended Products</h3>
        {recommended.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />  
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductPage;
