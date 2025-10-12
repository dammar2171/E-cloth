import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addFavoriteProducts = (product) => {
    setFavoriteProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    axios
      .get("/api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        favoriteProducts,
        setFavoriteProducts,
        addFavoriteProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
