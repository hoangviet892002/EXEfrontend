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
  Products,
  CreateProducts,
  DetailsProducts,
  EditProducts,
  CategoriesPages,
  ShopV2,
  CategoryType,
  RegisterPage,
} from "../pages";

const Router = () => {
  scrollPage();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopV2 />} />
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route path="/wishlist" element={<WishPage />} />
        <Route path="/shop-cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment-method" element={<PaymentMethodPage />} />
        <Route path="/check-out" element={<Checkout />} />

        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/add" element={<CreateProducts />} />
        <Route path="/admin/products/:id" element={<DetailsProducts />} />
        <Route path="/admin/products/:id/edit" element={<EditProducts />} />
        <Route path="/admin/categories" element={<CategoriesPages />} />
        <Route path="/admin/categories/:id" element={<CategoryType />} />
      </Routes>
    </div>
  );
};

export default Router;
