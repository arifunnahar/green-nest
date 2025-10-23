import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const Plants = () => {
    const { products } = useProducts()
    
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-3xl font-bold">All Plants</h1>
      
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4  md:p-0 lg:p-0 mb-5">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
  
};

export default Plants;
