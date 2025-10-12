import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const toggleFavoriteProduct = (product) => {
    setFavoriteProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  useEffect(() => {
    axios
      .get("/api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch products:", error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        favoriteProducts,
        setFavoriteProducts,
        toggleFavoriteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
