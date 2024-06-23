import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { pickType } from "../../redux/actions/megaMenuAction";
import { logout } from "../../redux/actions/userAction";
import useHook from "./hooks/useHook";
import { changeLanguage } from "../../redux/actions/languagesAction";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const language = useSelector((state) => state.languages.languages);
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(logout());
  };
  const options = ["en", "vi"];

  const { megaMenu, wishList, listCart } = useHook();

  return (
    <div className="border-bottom pb-5">
      <nav className="navbar navbar-light py-lg-5 pt-3 px-0 pb-0">
        <div className="container">
          <div className="row w-100 align-items-center g-3">
            <div className="col-xxl-2 col-lg-3">
              <Link className="navbar-brand d-none d-lg-block" to="/">
                <img
                  src={logo}
                  style={{ width: "150px" }}
                  alt="eCommerce HTML Template"
                />
              </Link>
            </div>
            <div className="col-xxl-6 col-lg-5 d-none d-lg-block">
              <form action="#" className="search-header">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    placeholder={t("Search for products")}
                    aria-label="Search for products.."
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text bg-transparent"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-xxl-3 d-none d-lg-block">
              <button
                type="button"
                className="btn  btn-outline-gray-400 text-muted"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i className="feather-icon icon-map-pin me-2"></i>
                {t("Location")}
              </button>
            </div>
            <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
              <div className="list-inline">
                <div className="list-inline-item"></div>
                <div className="list-inline-item">
                  <a
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    role="button"
                    aria-controls="offcanvasRight"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/shop-cart");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {listCart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="list-inline-item">
                  <Link to="/wishlist" className="text-muted position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {wishList.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                {user.isLoggedIn ? (
                  <>
                    <div className="list-inline-item">
                      <a
                        className="text-muted position-relative "
                        role="button"
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="list-inline-item">
                    <Link to="/login" className="text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
        <div className="container px-0 px-md-3">
          <div className="dropdown me-3 d-none d-lg-block">
            {/* <button
              className="btn btn-primary px-6 "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </span>{" "}
              {t("All Departments")}
            </button> */}
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Dairy, Bread & Eggs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Snacks & Munchies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Fruits & Vegetables
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Cold Drinks & Juices
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Breakfast & Instant Food
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Bakery & Biscuits
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="pages/shop-grid.html">
                  Chicken, Meat & Fish
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary "
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {language}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {options.map((option, index) => (
                <a
                  key={index}
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeLanguage(option));
                  }}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>

          <div
            className="offcanvas offcanvas-start p-4 p-lg-0"
            id="navbar-default"
          >
            <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
              <div>
                <img
                  src="assets/images/logo/freshcart-logo.svg"
                  alt="eCommerce HTML Template"
                />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="d-block d-lg-none mb-2 pt-2">
              <a
                className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </span>{" "}
                {t("All Departments")}
              </a>
              <div className="collapse mt-2" id="collapseExample">
                <div className="card card-body">
                  <ul className="mb-0 list-unstyled">
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Dairy, Bread & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Snacks & Munchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Cold Drinks & Juices
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Bakery & Biscuits
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-lg-none d-block mb-3">
              <button
                type="button"
                className="btn  btn-outline-gray-400 text-muted w-100 "
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i className="feather-icon icon-map-pin me-2"></i>
                {t("Pick Location")}
              </button>
            </div>
            <div className="d-none d-lg-block">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("Megamenu")}
                  </a>
                  <div className=" dropdown-menu pb-0">
                    <div className="row p-2 p-lg-4">
                      {megaMenu &&
                        megaMenu.map((category, index) => (
                          <div
                            className="col-lg-3 col-6 mb-4 mb-lg-0"
                            key={index}
                          >
                            <h6 className="text-primary ps-3">
                              {category.name}
                            </h6>
                            {category.categoryTypes.map((type, index) => (
                              <div
                                key={index}
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(pickType(type.id));
                                }}
                              >
                                <Link to="/shop" className="dropdown-item">
                                  {type.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        ))}

                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <div className="card border-0">
                          <img
                            src="assets/images/banner/menu-banner.jpg"
                            alt="eCommerce HTML Template"
                            className="img-fluid rounded-3"
                          />
                          <div className="position-absolute ps-6 mt-8">
                            <h5 className=" mb-0 ">
                              {t("Dont miss this offer today.")}
                            </h5>
                            <a href="#" className="btn btn-primary btn-sm mt-3">
                              {t("Shop Now")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("Account")}
                  </a>
                  <ul className="dropdown-menu">
                    {!user.isLoggedIn ? (
                      <>
                        <li>
                          <Link
                            to="/login"
                            className="dropdown-item no-underline"
                          >
                            {t("Sign In")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            className="dropdown-item no-underline"
                          >
                            {t("Signup")}
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item no-underline">
                            {t("Forgot Password")}
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/orders"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              {t("Orders")}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/setting"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              {t("Settings")}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/address"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              {t("Address")}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/payment-method"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              {t("Payment Methods")}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/notification"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              {t("Notification")}
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
