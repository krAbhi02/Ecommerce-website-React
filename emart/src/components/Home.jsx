import React from "react";
import Product from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/787363/1617369550601.jpg?imwidth=1600&impolicy=hq"
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0" style={{ color: "black" }}>
              NEW SEASON ARRIVALS
            </h5>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
