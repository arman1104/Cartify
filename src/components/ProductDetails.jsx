import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams(); // ← get id from URL
  const { products, addToCart } = useCart(); // ← no selectedProduct here

  // find the product by id from products list
  const product = products.find((p) => p.id === Number(id));

  // guard when products not ready or id invalid
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-700">Product not found ❌</h2>
      </div>
    );
  }

  // local quantity + size state
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-8 flex flex-col">
      {/* Header */}
      <div className="flex w-full mb-8">
        <h1 className="text-3xl font-bold text-gray-800 xl:pl-24">
          Product Details
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg p-8 gap-10 mx-auto w-full max-w-7xl">
        {/* Left Side - Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 md:w-96 md:h-96 max-w-md rounded-2xl object-contain "
          />
        </div>

        {/* Right Side - Product Info */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-500 text-lg">{product.brand}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-4">
              ₹{product.price}
            </p>
          </div>

          {/* Size Selection (now interactive) */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Size</h3>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border transition-all
                    ${
                      selectedSize === size
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector (now functional) */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Quantity</h3>
            <button
              className="px-2 py-2 rounded-md border border-gray-300 text-lg font-bold text-gray-600 hover:bg-gray-100"
              onClick={handleDecrease}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="px-6 py-2 text-gray-800 font-medium">
              {quantity}
            </span>
            <button
              className="px-2 py-2 rounded-md border border-gray-300 text-lg font-bold text-gray-600 hover:bg-gray-100"
              onClick={handleIncrease}
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              onClick={() => {
                // add the product 'quantity' times (keeps your current CartContext logic unchanged)
                for (let i = 0; i < quantity; i++)
                  addToCart({ ...product, selectedSize });
              }}
            >
              Add to Cart
            </button>
            <button className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
