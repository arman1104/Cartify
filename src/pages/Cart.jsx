import React from "react";
import { useCart } from "../context/CartContext"; // ← ADD THIS IMPORT

const Cart = () => {
  const { cart } = useCart(); // ← Get cart from context

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">Add some products to get started!</p>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛒 Shopping Cart
      </h1>
      <div className="max-w-4xl w-full px-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-300 rounded-lg p-4 mb-4 flex items-center gap-4 shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.brand}</p>
              <p className="text-green-600 font-semibold">₹{item.price}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm">Quantity</p>
              <p className="font-bold text-lg">{item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm">Subtotal</p>
              <p className="font-bold text-lg">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-6">
          <div className="flex justify-between items-center text-2xl font-bold">
            <span>Total:</span>
            <span className="text-green-600">
              ₹
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
