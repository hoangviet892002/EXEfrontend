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
  OrdersAdminPage,
  OrderDetailAdminPage,
} from "../pages";

const Router = () => {
  scrollPage();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.data?.user);
  console.log(user);
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
        <Route
          path="/orders"
          element={isLoggedIn ? <OrdersPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/orders/:id"
          element={isLoggedIn ? <OrderDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/setting"
          element={isLoggedIn ? <Setting /> : <Navigate to="/login" />}
        />
        <Route
          path="/address"
          element={isLoggedIn ? <Address /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment-method"
          element={
            isLoggedIn ? <PaymentMethodPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/check-out"
          element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
        />

        <Route
          path="/admin/products"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <Products />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/products/add"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <CreateProducts />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/products/:id"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <DetailsProducts />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/products/:id/edit"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <EditProducts />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/categories"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <CategoriesPages />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/categories/:id"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <CategoryType />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/orders"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <OrdersAdminPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/orders/:id"
          element={
            isLoggedIn && user?.role === "ADMIN" ? (
              <OrderDetailAdminPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
