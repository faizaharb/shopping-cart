import React from "react";
import "../../css/Filter/Filter.css";

export default function Filter() {
  return (
    <>
      <div className="filterInfo">
        <h2>Filter</h2>
        <div className="filterContent">
          <h5>
            <span>Number of products : </span>
            <span> 4 products</span>
          </h5>
          <div className="filterBySize">
            <h5>Filter</h5>
            <select>
              <option value="all">All</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="filterByOrder">
            <h5>Order</h5>
            <select>
              <option value="latest">Latest</option>
              <option value="lower">Lower</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
