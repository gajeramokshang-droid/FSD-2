
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routing/Home";
import Shop from "./routing/Shop";
import Contact from "./routing/Contact";
import Nopage from "./routing/Nopage";

function Main1() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Product</Link></li> {/* Example extra link */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Shop />} /> {/* Product routes to Shop */}
        <Route path="*" element={<Nopage />} /> {/* Catch-all for invalid routes */}
      </Routes>
    </Router>
  );
}

export default Main1;

