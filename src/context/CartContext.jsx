import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { products as ProductData } from "../data/productsData";
import { useEffect } from "react";

// 1️⃣ Create the Context
const CartContext = createContext();

// 2️⃣ Create the Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // if already in cart → update quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // if not in cart → add new one
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // console.log("Added to cart:", product.title);
  };

  // Calculate cart count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // const filteredProducts = () =>
  //   products.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );

  const filteredProducts =
    search.trim() === ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );

  const refreshPage = () => {
    setSearch("");
    setProducts(ProductData);
    // window.location.reload(); // for full reload
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    // console.log("Deleted data from Cart");
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // remove items with 0
    );
  };

  const value = {
    cart,
    setCart,
    products,
    setProducts,
    addToCart,
    cartCount,
    search,
    setSearch,
    filteredProducts,
    refreshPage,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3️⃣ Create Custom Hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
