import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [bagProducts, setBagProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
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

  const removeBagProduct = (id, selectedSize = null) => {
    setBagProducts((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            (selectedSize === null ? true : item.selectedSize === selectedSize)
          )
      )
    );
  };

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
      .get("http://localhost:5000/user/fetchProducts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Failed to fetch products:", error);
      });
  }, []);

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
        signupData,
        loginData,
        authenticated,
        openSearchModal,
        searchedProduct,
        setSearchedProduct,
        setOpenSearchModal,
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
