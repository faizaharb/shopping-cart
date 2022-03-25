import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import data from "./data.json";

export default function App() {
  const [products, setProducts] = useState(data);

  return (
    <>
      <div className="layOut">
        <Header />
        <main>
          <div className="mainSec">
            <Products products={products} />
            <div className="filterInfo">filter</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
