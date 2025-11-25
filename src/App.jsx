import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import NewCloth from "./pages/NewCloth";
import { AppProvider } from "./store/Context";
import FavoriteProduct from "./pages/FavoriteProduct";
import AddCart from "./pages/AddCart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import UserDashboard from "./pages/UserDashboard";
import AccountDetail from "./pages/AccountDetail";
import WhatsAppButton from "./components/WhatsAppButton";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <AppProvider>
      <WhatsAppButton />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcloth" element={<NewCloth />} />
          <Route path="/favproducts" element={<FavoriteProduct />} />
          <Route path="/addcart/:type/:id" element={<AddCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoutes>
                <UserDashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/accountdetail"
            element={
              <ProtectedRoutes>
                <AccountDetail />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
