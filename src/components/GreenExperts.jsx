
import React from "react";

const experts = [
  {
    id: 1,
    name: "Alice Green",
    specialization: "Indoor Plants & Succulents",
    image: "https://i.pravatar.cc/150?img=32", 
  },
  {
    id: 2,
    name: "Bob Leaf",
    specialization: "Tropical Plants & Orchids",
    image: "https://i.pravatar.cc/150?img=12",
  },
 {
    id: 3,
    name: "Clara Bloom",
    specialization: "Flowering & Bonsai Plants",
    image: "https://i.pravatar.cc/150?img=47", 
  },
   {
    id: 4,
    name: "David Root",
    specialization: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?&w=150&h=150&fit=crop",
  },
];

const GreenExperts = () => {
  return (
    <section className="green-experts py-10 ">
      <div className=" max-w-[1200px] mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Green Experts</h2>
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div key={expert.id} className="bg-green-200 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-gray-700 text-center">{expert.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
