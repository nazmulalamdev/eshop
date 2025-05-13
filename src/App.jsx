import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CommonLayout from "./components/commonLayout/CommonLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
