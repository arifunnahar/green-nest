import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {

    const { plantName, image, price, rating, id } = product;

  return (
    <div className="card bg-base-100  shadow-sm hover:shadow-lg transition-shadow duration-300 p-2">
      <figure>
        <img
          src={image}
          alt={plantName}
          className="w-full  object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-700">{plantName}</h2>
       
        <div className=" mt-2">
          <span className="font-semibold text-green-600">Price: ${price}</span>
         
        </div>
       
       
              <div className="flex justify-between items-center mt-4">
                   <span className="text-yellow-500 font-medium">⭐ {rating}</span>
          <Link  to={`/product/${id}`}   className="btn btn-outline">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
