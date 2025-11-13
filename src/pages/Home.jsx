import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { addToCart, filteredProducts, cart, setSelectedProduct } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-50">
      {/* ---------- HEADING ---------- */}
      <div className="w-full md:max-w-7xl mx-auto mb-8 px-4">
        <h1
          className="text-3xl font-bold text-gray-800 
           sm:text-left"
        >
          🛍️ Product Gallery
        </h1>
      </div>

      {/* ---------- PRODUCT LIST ---------- */}
      <div className="w-full md:max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-start lg:justify-between xl:justify-center gap-4 px-4 lg:px-4">
        {filteredProducts.map((product) => {
          const itemInCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="
                bg-white rounded-lg shadow hover:shadow-md transition-transform 
                duration-500 hover:scale-105 cursor-pointer
                w-80 sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[24%]
                p-4
              "
            >
              {/* ---------- IMAGE ---------- */}
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-32 sm:w-48 sm:h-36 lg:w-56 lg:h-32 object-contain mx-auto my-3"
              />

              {/* ---------- TEXTS ---------- */}
              <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                {product.brand}
              </h2>
              <p className="text-gray-600 text-md line-clamp-1 mt-1">
                {product.title}
              </p>

              <div className="mt-3 mb-3">
                <span className="text-gray-700 text-lg font-semibold rounded-lg">
                  ₹{product.price}
                </span>
              </div>

              {/* ---------- BUTTON ---------- */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className={` px-4 py-1 rounded transition ${
                  itemInCart
                    ? "bg-blue-200 text-gray-800"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
              >
                {itemInCart
                  ? `In Cart (${itemInCart.quantity})`
                  : "Add To Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
