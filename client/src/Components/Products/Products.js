import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "../Modal/ProductModal";

export default function Products(props) {
  const [product, setProduct] = useState("");

  const productDetails = (product) => {
    setProduct(product);
  };

  const closeDetails = () => {
    setProduct(false);
  };

  return (
    <div className="productInfo">
      {props.products.map((product) => (
        <div className="productItem" key={product.id}>
          <div className="productImg" onClick={() => productDetails(product)}>
            <img src={product.imgUrl} alt={product.title} />
          </div>
          <div className="productDesc">
            <span>{product.title}</span>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
      <ProductModal product={product} closeDetails={closeDetails} />
    </div>
  );
}
