
import React from "react";

const PlantCareTips = () => {
 const tips = [
  { 
    id: 1, 
    title: "Watering", 
    description: "Water your plants regularly, making sure the soil stays moist but not soggy. Overwatering can harm roots, so always check the soil before watering to ensure healthy growth." 
  },
  { 
    id: 2, 
    title: "Sunlight", 
    description: "Place your plants in a spot that receives bright, indirect sunlight. Too much direct sun can scorch the leaves, while too little can slow growth. Balance light exposure for thriving plants." 
  },
  { 
    id: 3, 
    title: "Fertilizing", 
    description: "Feed your plants with a balanced fertilizer at least once a month during the growing season. This ensures they get all essential nutrients for strong roots, vibrant leaves, and healthy blooms." 
  },
];

  return (
    <section className="   max-w-[1200px] mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Plant Care Tips</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map(tip => (
          <div key={tip.id} className="p-4 bg-blue-200 shadow rounded-xl ">
            <h3 className="text-xl font-semibold mb-2 ">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;
