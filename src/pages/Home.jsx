import React from "react";

import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";


const Home = () => {
  
    const {products,loading, error} = useProducts()
    console.log(products)
    const featuredProducts = products.slice(0,3)
    return <div>
        <div className=" py-5">
              <h1 className="text-3xl font-bold text-center">Top Rated Indoor Plants</h1>
        
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4  md:p-0 lg:p-0 mb-5">
             {
            featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
      }
       </div>
  </div>;
};

export default Home;
