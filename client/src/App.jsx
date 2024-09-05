import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticalPage from "./components/VerticalPage"
import TravelLevel2 from "./components/TravelLevel2";
// import EcommerceLevel2 from "./EcommerceLevel2";
// import DeliveryLevel2 from "./DeliveryLevel2";
// import FintechLevel2 from "./FintechLevel2";
import TravelLevelBizz3 from "./components/TravelLevelBizz3"; 
import TravelLevelData3 from "./components/TravelLevelData3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerticalPage />} />
        <Route path="/travel2" element={<TravelLevel2 />} />
        {/* <Route path="/ecommerce2" element={<EcommerceLevel2 />} />
        <Route path="/delivery2" element={<DeliveryLevel2 />} />
        <Route path="/fintech2" element={<FintechLevel2 />} /> */}
        <Route path="/travelbizz3" element={<TravelLevelBizz3 />} />
        <Route path="/traveldata3" element={<TravelLevelData3 />} />
      </Routes>
    </Router>
  );
}

export default App;
