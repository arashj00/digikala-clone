import { Route, Routes } from "react-router-dom";
import ProductP from "./pages/product";
import SearchP from "./pages/search";
import MainLayout from "./layout/Main";
import LoginP from "./pages/login";
import HomeP from "./pages/Home";
import CardP from "./pages/card";
import { useProductStore } from "./store/productStore";
import { useEffect } from "react";
import SignInP from "./pages/signIn";
export default function App() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);




  
  return (
    <Routes>
      <Route path="/signIn" element={<SignInP />} />
      <Route path="/login" element={<LoginP />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeP />} />
        <Route path="card" element={<CardP />} />
        <Route path="search/:category/:subCategory?" element={<SearchP />} />
        <Route path="product/:id" element={<ProductP />} />
        <Route
          path="*"
          element={
            <div className="py-10 text-center text-4xl">404 not found</div>
          }
        />
      </Route>
    </Routes>
  );
}
