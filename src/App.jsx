import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDeatiles";
import AddToCartProduct from "./pages/AddToCartProduct";
import AddToCartProvider from "./context/AddToCart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
      
    <AddToCartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/carts" element={<AddToCartProduct />} />
        </Routes>
        <ToastContainer />
    </AddToCartProvider>
      
  );
}

export default App;
