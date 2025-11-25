import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { ToastContainer } from "react-toastify";

import Account from "./pages/account/Account";
import Admin from "./pages/admin/Admin";
import Blogs from "./pages/blogs/Blogs";
import Tours from "./pages/tours/Tours";
import Home from "./pages/home/Home";

import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <PrimeReactProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
        style={{ zIndex: 999999 }}
      />
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
