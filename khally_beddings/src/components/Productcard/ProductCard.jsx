import React from "react";
import { useCart } from "../../Context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card"> 
       
      <a href={`/product/${product.id}`} >
  <     img src={product.image} alt={product.name} style={{ width: "100%" }} /> 
      </a>     
      <h3>
        <a href={`/product/${product.id}`} style={{ textDecoration: "none", color: "#111" }}>
          {product.name}
        </a>
      </h3>
      <p>₦{product.price.toLocaleString()}</p>
      <button className="butter" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
   
    
  );
};

export default ProductCard;
