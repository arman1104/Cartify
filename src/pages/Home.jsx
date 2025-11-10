import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { addToCart, filteredProducts, cart, setSelectedProduct } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product); //  store selected product in context
    navigate(`/product/${product.id}`); //  go to product details page
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛍️ Product Gallery
      </h1>

      <div className="flex flex-wrap justify-center gap-4 max-w-8xl mx-auto">
        {filteredProducts.map((product) => {
          // ✅ Check if this product is already in the cart
          const itemInCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              // className="border border-gray-300 rounded-lg p-4 shadow w-64 text-center bg-white hover:shadow-md transition-transform duration-500 hover:scale-105"
              className="rounded-lg p-4 shadow w-64  bg-white hover:shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)} //  add click
            >
              <img
                src={product.image}
                alt={product.title}
                // className="w-36 h-36 object-contain mx-auto my-3"
                className="w-56 h-32 object-contain mx-auto my-3"
              />

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

              {/* ✅ Toggle button text based on cart state */}
              <button
                // className="bg-blue-400 text-white px-2 py-[3px] rounded hover:bg-blue-500 transition"
                className={`px-3 py-1 rounded transition ${
                  itemInCart
                    ? "bg-blue-200 text-gray-800"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
                // onClick={() => addToCart(product)}
                onClick={(e) => {
                  e.stopPropagation(); // 🛑 prevent triggering product click
                  addToCart(product);
                }}
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
