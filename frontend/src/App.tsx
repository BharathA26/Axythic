import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FinanceDashboard from "./pages/FinanceDashboard";
import Shopcart from "./pages/Shopcart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/axythicfin/dashboard" element={<FinanceDashboard />} />
        <Route path="/shopcart" element={<Shopcart />} />
      </Routes>
    </Router>
  );
}

export default App;
