import { Link, NavLink } from "react-router-dom";

const SideBarCus = () => {
  return (
    <div class="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
      <div class="pt-10 pe-lg-10">
        <ul class="nav flex-column nav-pills nav-pills-dark">
          <li class="nav-item">
            <NavLink
              //   class="nav-link active"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/orders"
            >
              <i class="feather-icon icon-shopping-bag me-2"></i>Your Orders
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/setting"
            >
              <i class="feather-icon icon-settings me-2"></i>Settings
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/address"
            >
              <i class="feather-icon icon-map-pin me-2"></i>Address
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/payment-method"
            >
              <i class="feather-icon icon-credit-card me-2"></i>Payment Method
            </NavLink>
          </li>

          <li class="nav-item">
            <hr />
          </li>

          <li class="nav-item">
            <a class="nav-link" href="../index.html">
              <i class="feather-icon icon-log-out me-2"></i>Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBarCus;
