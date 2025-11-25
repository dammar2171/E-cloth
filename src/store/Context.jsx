import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [bagProducts, setBagProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);
  const [signupData, setSignupData] = useState({
    email: "dammarbhatt111@gmail.com",
    password: "12345678",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [authenticated, setAuthenticated] = useState(false);

  const login = (email, password) => {
    if (email === signupData.email && password === signupData.password) {
      setAuthenticated(true);
      setLoginData({ email, password });
    } else {
      setAuthenticated(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  // Add product to bag (adds incomingQty to existing quantity)
  const addProducts = (product) => {
    const incomingQty = product.quantity ? Number(product.quantity) : 1;

    setBagProducts((prev) => {
      const idx = prev.findIndex(
        (p) => p.id === product.id && p.selectedSize === product.selectedSize
      );

      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          quantity: (Number(updated[idx].quantity) || 0) + incomingQty,
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity: incomingQty }];
      }
    });

    setProductQuantity(1);
  };

  // Remove product from bag (if selectedSize provided, remove that specific variant)
  const removeBagProduct = (id, selectedSize = null) => {
    setBagProducts((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            // if selectedSize passed, require match; else remove all items with same id
            (selectedSize === null ? true : item.selectedSize === selectedSize)
          )
      )
    );
  };

  // Update a bag product's quantity (set to a specific number)
  const updateBagProduct = (id, selectedSize = null, quantity = 1) => {
    const qty = Number(quantity) || 0;
    setBagProducts((prev) =>
      prev.map((item) => {
        if (
          item.id === id &&
          (selectedSize === null || item.selectedSize === selectedSize)
        ) {
          return { ...item, quantity: qty };
        }
        return item;
      })
    );
  };

  // Toggle favorite product
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

  // Fetch products from API
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

  // fetch new products from api
  useEffect(() => {
    axios
      .get("/api/newProducts")
      .then((response) => {
        setNewProducts(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch new products:", error);
      });
  }, []);

  // Dynamically calculate total price (using sPrice from your example)
  const totalPrice = bagProducts.reduce((total, item) => {
    const price = Number(item.sPrice) || 0;
    const qty = Number(item.quantity) || 0;
    return total + price * qty;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        products,
        favoriteProducts,
        bagProducts,
        productQuantity,
        totalPrice,
        newProducts,
        signupData,
        loginData,
        authenticated,
        login,
        logout,
        setLoginData,
        setSignupData,
        removeBagProduct,
        updateBagProduct,
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
