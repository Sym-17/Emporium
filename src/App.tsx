import AddProducts from "./pages/AddProducts";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-products" element={<AddProducts />} />
    </Routes>
  );
}

export default App;
