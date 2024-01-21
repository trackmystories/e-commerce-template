import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import ProductPage from "./Screens/ProductPage";

const NavigateButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Landing Page</button>
      <button onClick={() => navigate("/products")}>Go to Product Page</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavigateButtons />
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
