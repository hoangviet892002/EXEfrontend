import { Route, Routes, Navigate } from "react-router-dom";
import scrollPage from "../hook/scrollPage";
import { useSelector } from "react-redux";
import {
  HomePage,
  ShopPage,
  ErrorPage,
  LoginPage,
  WishPage,
  ShopSingle,
  CartPage,
  OrdersPage,
  OrderDetail,
  Setting,
  Address,
  PaymentMethodPage,
  Checkout,
} from "../pages";

const Router = () => {
  scrollPage();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/wishlist" element={<WishPage />} />
        <Route path="/shop-cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment-method" element={<PaymentMethodPage />} />
        <Route path="/check-out" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default Router;
