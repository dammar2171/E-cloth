import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [bagProducts, setBagProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  const addProducts = (product) => {
    const incomingQty = product.quantity ? Number(product.quantity) : 1;

    setBagProducts((prev) => {
      // match by id and selectedSize so different sizes are separate entries
      const idx = prev.findIndex(
        (p) => p.id === product.id && p.selectedSize === product.selectedSize
      );

      if (idx !== -1) {
        // update existing item quantity (add incoming quantity)
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          quantity: (Number(updated[idx].quantity) || 0) + incomingQty,
        };
        return updated;
      } else {
        // add new item honoring the incoming quantity
        return [...prev, { ...product, quantity: incomingQty }];
      }
    });

    setProductQuantity(1);
  };

  const removeBagProduct = (id) => {
    setBagProducts((prev) => prev.filter((item) => item.id !== id));
  };

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
        bagProducts,
        productQuantity,
        removeBagProduct,
        setFavoriteProducts,
        toggleFavoriteProduct,
        addProducts,
        setProductQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
