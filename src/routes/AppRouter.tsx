import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const NotFound404 = lazy(() => import("../pages/NotFound404"));
const Register = lazy(() => import("../pages/Register"));

export default function AppRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound404 />} />        
      </Routes>
    </Suspense>
  );
}
