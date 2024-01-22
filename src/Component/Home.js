import React from "react";
import Product from "./Product";

const Home = () => {

  return (
    <div className="container">
      <h1 className="my-5" style={{textAlign: 'center'}}>Product List</h1>
      <Product />
    </div>
  );
};

export default Home;
