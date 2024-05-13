import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";
import logo from "../../../assets/images/logo/freshcart-logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <div class="border-bottom pb-5">
      <nav class="navbar navbar-light py-lg-5 pt-3 px-0 pb-0">
        <div class="container">
          <div class="row w-100 align-items-center g-3">
            <div class="col-xxl-2 col-lg-3">
              <Link class="navbar-brand d-none d-lg-block" to="/">
                <img src={logo} alt="eCommerce HTML Template" />
              </Link>
            </div>
            <div class="col-xxl-6 col-lg-5 d-none d-lg-block">
              <form action="#" class="search-header">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-end-0"
                    placeholder="Search for products.."
                    aria-label="Search for products.."
                    aria-describedby="basic-addon2"
                  />
                  <span
                    class="input-group-text bg-transparent"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                </div>
              </form>
            </div>
            <div class="col-md-2 col-xxl-3 d-none d-lg-block">
              <button
                type="button"
                class="btn  btn-outline-gray-400 text-muted"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i class="feather-icon icon-map-pin me-2"></i>Location
              </button>
            </div>
            <div class="col-md-2 col-xxl-1 text-end d-none d-lg-block">
              <div class="list-inline">
                <div class="list-inline-item">
                  <a
                    class="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span class="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                {user.isLoggedIn ? (
                  <>
                    <div class="list-inline-item">
                      <Link to="/wishlist" class="text-muted position-relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          5<span class="visually-hidden">unread messages</span>
                        </span>
                      </Link>
                    </div>

                    <div className="list-inline-item">
                      <a
                        class="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        href="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
      <nav class="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
        <div class="container px-0 px-md-3">
          <div class="dropdown me-3 d-none d-lg-block">
            <button
              class="btn btn-primary px-6 "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </span>{" "}
              All Departments
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Dairy, Bread & Eggs
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Snacks & Munchies
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Fruits & Vegetables
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Cold Drinks & Juices
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Breakfast & Instant Food
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Bakery & Biscuits
                </a>
              </li>

              <li>
                <a class="dropdown-item" href="pages/shop-grid.html">
                  Chicken, Meat & Fish
                </a>
              </li>
            </ul>
          </div>

          <div class="offcanvas offcanvas-start p-4 p-lg-0" id="navbar-default">
            <div class="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
              <div>
                <img
                  src="assets/images/logo/freshcart-logo.svg"
                  alt="eCommerce HTML Template"
                />
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="d-block d-lg-none mb-2 pt-2">
              <a
                class="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span class="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </span>{" "}
                All Departments
              </a>
              <div class="collapse mt-2" id="collapseExample">
                <div class="card card-body">
                  <ul class="mb-0 list-unstyled">
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Dairy, Bread & Eggs
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Snacks & Munchies
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Cold Drinks & Juices
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Bakery & Biscuits
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="d-lg-none d-block mb-3">
              <button
                type="button"
                class="btn  btn-outline-gray-400 text-muted w-100 "
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i class="feather-icon icon-map-pin me-2"></i>Pick Location
              </button>
            </div>
            <div class="d-none d-lg-block">
              <ul class="navbar-nav ">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="index.html">
                        Home 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/index-2.html">
                        Home 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/index-3.html">
                        Home 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="pages/shop-grid.html">
                        Shop Grid - Filter
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="pages/shop-grid-3-column.html"
                      >
                        Shop Grid - 3 column
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-list.html">
                        Shop List - Filter
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-filter.html">
                        Shop - Filter
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-fullwidth.html">
                        Shop Wide
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-single.html">
                        Shop Single
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-wishlist.html">
                        Shop Wishlist
                      </a>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/shop-cart">
                        Shop Cart
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/shop-checkout.html">
                        Shop Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stores
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="pages/store-list.html">
                        Store List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/store-grid.html">
                        Store Grid
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/store-single.html">
                        Store Single
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown dropdown-fullwidth">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mega menu
                  </a>
                  <div class=" dropdown-menu pb-0">
                    <div class="row p-2 p-lg-4">
                      <div class="col-lg-3 col-6 mb-4 mb-lg-0">
                        <h6 class="text-primary ps-3">Dairy, Bread & Eggs</h6>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Butter
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Milk Drinks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Curd & Yogurt
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Eggs
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Buns & Bakery
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Cheese
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Condensed Milk
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Dairy Products
                        </a>
                      </div>
                      <div class="col-lg-3 col-6 mb-4 mb-lg-0">
                        <h6 class="text-primary ps-3">
                          Breakfast & Instant Food
                        </h6>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Breakfast Cereal
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Noodles, Pasta & Soup
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Frozen Veg Snacks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Frozen Non-Veg Snacks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Vermicelli
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Instant Mixes
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Batter
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          {" "}
                          Fruit and Juices
                        </a>
                      </div>
                      <div class="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 class="text-primary ps-3">Cold Drinks & Juices</h6>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Soft Drinks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Fruit Juices
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Coldpress
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Water & Ice Cubes
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Soda & Mixers
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Health Drinks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Herbal Drinks
                        </a>
                        <a class="dropdown-item" href="pages/shop-grid.html">
                          Milk Drinks
                        </a>
                      </div>
                      <div class="col-lg-3 col-12 mb-4 mb-lg-0">
                        <div class="card border-0">
                          <img
                            src="assets/images/banner/menu-banner.jpg"
                            alt="eCommerce HTML Template"
                            class="img-fluid rounded-3"
                          />
                          <div class="position-absolute ps-6 mt-8">
                            <h5 class=" mb-0 ">
                              Dont miss this <br />
                              offer today.
                            </h5>
                            <a href="#" class="btn btn-primary btn-sm mt-3">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="pages/blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/blog-single.html">
                        Blog Single
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/blog-category.html">
                        Blog Category
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/about.html">
                        About us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/404error.html">
                        404 Error
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="pages/contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    {!user.isLoggedIn ? (
                      <>
                        <li>
                          <Link
                            to="/login"
                            className="dropdown-item no-underline"
                          >
                            Sign in
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            className="dropdown-item no-underline"
                          >
                            Signup
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item no-underline">
                            Forgot Password
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
                            <a style={{ textDecoration: "none" }}>Orders</a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/setting"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>Settings</a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/address"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>Address</a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/payment-method"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              Payment Methods
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/notification"
                            className="dropdown-item no-underline"
                          >
                            <a style={{ textDecoration: "none" }}>
                              Notification
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="docs/index.html">
                    Docs
                  </a>
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
