// context/ProductsContext.jsx
import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Smartphone X200",
      description: "6.5-inch OLED display, 128GB storage, 48MP camera.",
      image: "/image-1.webp",
      price: 799,
    },
    {
      id: 2,
      name: "Laptop Pro 15",
      description: "Intel Core i7, 16GB RAM, 1TB SSD.",
      image: "/image-2.jpeg",
      price: 1299,
    },
    {
      id: 3,
      name: "Tablet Air 10",
      description: "10-inch display, 64GB storage, long-lasting battery.",
      image: "/image-3.jpg",
      price: 399,
    },
    {
      id: 4,
      name: "Wireless Headphones",
      description: "Bluetooth connectivity, noise cancellation, comfortable fit.",
      image: "/image-4.avif",
      price: 199,
    },
    {
      id: 5,
      name: "Smartwatch Pro",
      description: "Heart rate monitor, step tracker, sleep analysis.",
      image: "/image-5.jpg",
      price: 299,
    },
    {
      id: 6,
      name: "Digital Camera",
      description: "High-resolution sensor, advanced shooting modes.",
      image: "/image-6.jpeg",
      price: 499,
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      description: "Wireless sound, long battery life.",
      image: "/image-7.jpeg",
      price: 149,
    },
    {
      id: 8,
      name: "Gaming Console",
      description: "Stunning graphics, online multiplayer.",
      image: "/image-8.jpeg",
      price: 399,
    },
    {
      id: 9,
      name: "External Hard Drive",
      description: "Ample storage, fast data transfer.",
      image: "/image-9.jpg",
      price: 99,
    }
  ];

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart Function
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
