import AddProducts from "./pages/AddProducts";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Layout from "./layouts/Layout";
import UserCart from "./pages/UserCart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-cart" element={<UserCart />} />
      </Routes>
    </Layout>
  );
}

export default App;
