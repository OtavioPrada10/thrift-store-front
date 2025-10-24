import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));

export default function AppRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />        
      </Routes>
    </Suspense>
  );
}
