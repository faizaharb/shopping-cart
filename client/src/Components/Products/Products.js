import React from "react";
import "../../css/Products/Products.css";

export default function Products(props) {
  return (
    <div className="productInfo">
      {props.products.map((product) => (
        <div className="productItem" key={product.id}>
          <div className="productImg">
            <img src={product.imgUrl} alt={product.title} />
          </div>
          <div className="productDesc">
            <span>{product.title}</span>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
