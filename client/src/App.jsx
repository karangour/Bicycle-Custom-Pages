import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticalPage from "./components/VerticalPage";
import TravelPage from "./components/TravelPage";
import EcommercePage from "./components/EcommercePage";
import DeliveryPage from "./components/DeliveryPage";
import FintechPage from "./components/FintechPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerticalPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/fintech" element={<FintechPage />} />
      </Routes>
    </Router>
  );
}

export default App;
