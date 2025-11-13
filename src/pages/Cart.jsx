import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <ShoppingCart className="w-32 h-32 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">Add some products to get started!</p>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 ">
          🛒 Your Shopping Cart
        </h1>
      </div>

      {/* Container: left (items) / right (summary) */}
      <div className="max-w-7xl mx-auto flex flex-col  xl:flex-row gap-8">
        {/* Left: Items list */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden ">
          {/* Header row */}
          <div className="hidden md:flex items-center bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700">
            <div className="flex-1">Product</div>
            <div className="w-32">Price</div>
            <div className="w-32">Quantity</div>
            <div className="w-28">Total</div>
            <div className="w-12">Remove</div>
          </div>

          {/* Items */}
          <div className="">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-4 px-4 py-5 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                {/* Product info */}
                <div
                  className="flex items-start md:items-center gap-4 flex-1 cursor-pointer"
                  onClick={() => handleProductClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-20 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="w-full md:w-28 text-gray-700 font-medium text-left md:text-center">
                  <div className="md:hidden text-sm text-gray-500">Price</div>₹
                  {item.price}
                </div>

                {/* Quantity controls */}
                <div className="w-full md:w-36 flex items-center justify-center md:justify-center gap-3">
                  {/* <div className="hidden md:block text-sm text-gray-500">
                    Quantity
                  </div> */}
                  <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                    <Minus
                      className="w-4 h-4 text-gray-600"
                      onClick={() => decreaseQuantity(item.id)}
                    />
                  </button>
                  <div className="font-semibold">{item.quantity}</div>
                  <button className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                    <Plus
                      className="w-4 h-4 text-gray-600"
                      onClick={() => increaseQuantity(item.id)}
                    />
                  </button>
                </div>

                {/* Total */}
                <div className="w-full md:w-28 text-left md:text-center font-semibold text-gray-800">
                  <div className="md:hidden text-sm text-gray-500">Total</div>₹
                  {(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove */}
                <div className="w-full md:w-16 text-left md:text-center">
                  <button className="p-2 rounded-full hover:bg-red-50 transition">
                    <Trash2
                      className="w-5 h-5 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order summary */}
        <aside className="w-full xl:w-96">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ₹
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping estimate</span>
                <span>₹10.00</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span>Service Charge</span>
                <span>₹10.10</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>
                ₹
                {(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) +
                  10 +
                  10
                ).toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition font-semibold">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 text-blue-600mt-6 py-3 text-blue-600 rounded-lg hover:bg-blue-100 transition font-bold">
              Continue Shopping
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
