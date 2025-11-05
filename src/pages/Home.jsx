import React from "react";
import { products } from "../data/productsData";
import { useCart } from "../context/CartContext";

const Home = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛍️ Product Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-8xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 shadow w-64 text-center bg-white hover:shadow-md transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
              {product.brand}
            </h2>
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mx-auto my-3"
            />
            <p className="text-gray-600 text-sm text-center line-clamp-1">
              {product.title}
            </p>
            <div className="mt-3 mb-3">
              <span className="text-gray-800 bg-gray-100 font-sm px-2 py-[3px] rounded-lg">
                {/* ₹{product.price.toFixed(2)} */}₹{product.price}
              </span>
            </div>
            <button
              className="bg-blue-400 text-white px-3 py-[6px] rounded hover:bg-blue-500 transition"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
