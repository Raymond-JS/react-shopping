import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    
    function grabProducts() {
      get("supermarket.json")
      .then((data) => {
        console.log(data)
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
    }

    grabProducts()
    
  }, [] ); // OK in this example because we don't use *any* values from component scope

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
