import React from "react";
import Modal from "react-modal";
import "../../css/Modal/ProductModal.css";

export default function ProductModal(props) {
  const { product, closeDetails } = props;
  return (
    <Modal isOpen={product} onRequestClose={closeDetails}>
      <span onClick={closeDetails}>
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div className="productDetail">
        <div className="productimage">
          <img src={product.imgUrl} alt={product.title} />
        </div>
        <div className="productContent">
          <h3>
            <span>{product.title}</span> <span>Price : {product.price}$</span>
          </h3>
          <h5>{product.description}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Modal>
  );
}
