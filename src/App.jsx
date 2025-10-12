import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import NewCloth from "./pages/NewCloth";
import { AppProvider } from "./store/Context";
import FavoriteProduct from "./pages/FavoriteProduct";
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcloth" element={<NewCloth />} />
          <Route path="/favproducts" element={<FavoriteProduct />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
