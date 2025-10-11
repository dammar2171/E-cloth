import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Cloth from "./pages/Cloth";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloth" element={<Cloth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
