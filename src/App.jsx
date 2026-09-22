import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import Accessories from "./pages/Accessories";
import Category from "./pages/Category";
import Collections from "./pages/Collections";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import FloatingWidgets from "./components/FloatingWidgets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category" element={<Category />} />

        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/accessories" element={<Accessories />} />

        <Route path="/collections" element={<Collections />} />
        <Route
          path="/collections/:collectionName"
          element={<Collections />}
        />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Floating Chat Box & WhatsApp Concierge */}
      <FloatingWidgets />
    </BrowserRouter>
  );
}

export default App;