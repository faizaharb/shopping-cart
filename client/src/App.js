import React, { useState } from "react";
import Filter from "./Components/Filter/Filter";
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
            <Filter />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
