import { useState } from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (loading) return <p className="text-center mt-10 text-lg">Loading.....</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const product = products.find((p) => String(p.id) === id);
  if (!product) return <p className="text-center mt-10 text-lg">Product not found</p>;

  const {
    image,
    plantName,
    providerName,
    price,
    rating,
    availableStock,
    description,
    category,
    careLevel,
  } = product;

  const handleToggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Booking successful for ${formData.name}!`);
    setFormData({ name: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 sm:px-6">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border0 flex flex-col md:flex-row">
        {/* Image Left side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-50 p-3 ">
          <img src={image} alt={plantName} className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Right side*/}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{plantName}</h2>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              Provided by <span className="text-green-600 font-semibold">{providerName}</span>
            </p>

            <div className="grid grid-cols-3 gap-4 text-gray-800 mb-6">
              <div className="bg-green-100 rounded-lg py-3 text-center hover:bg-green-50 transition">
                <p className="text-sm md:text-base mb-1">Price</p>
                <p className="font-semibold text-lg text-green-700">${price}</p>
              </div>
              <div className="bg-green-100 rounded-lg py-3 text-center hover:bg-green-50 transition">
                <p className="text-sm md:text-base mb-1">Rating</p>
                <p className="font-semibold text-lg text-yellow-600">{rating}</p>
              </div>
              <div className="bg-green-100 rounded-lg py-3 text-center hover:bg-green-50 transition">
                <p className="text-sm md:text-base mb-1">In Stock</p>
                <p className="font-semibold text-lg text-gray-700">{availableStock}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">About the Plant</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 text-gray-600 text-sm md:text-base mb-6">
              <p>
                <span className="font-semibold text-gray-800">Category: </span>
                {category}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Care Level: </span>
                {careLevel}
              </p>
            </div>
          </div>

          {/* Book Consultation Button */}
          <div className="text-center">
            <button
              className="bg-green-600 hover:bg-green-800 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-md"
              onClick={handleToggleForm}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {showForm && (
        <form
          className="max-w-md mx-auto bg-green-200 p-6 rounded-xl shadow-md mt-6 "
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Booking Form</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-full shadow-md"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductDetails;
