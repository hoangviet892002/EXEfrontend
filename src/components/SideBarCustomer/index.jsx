import { Link, NavLink } from "react-router-dom";

const SideBarCus = () => {
  return (
    <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
      <div className="pt-10 pe-lg-10">
        <ul className="nav flex-column nav-pills nav-pills-dark">
          <li className="nav-item">
            <NavLink
              //   className="nav-link active"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/orders"
            >
              <i className="feather-icon icon-shopping-bag me-2"></i>Your Orders
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/setting"
            >
              <i className="feather-icon icon-settings me-2"></i>Settings
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/address"
            >
              <i className="feather-icon icon-map-pin me-2"></i>Address
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/payment-method"
            >
              <i className="feather-icon icon-credit-card me-2"></i>Payment
              Method
            </NavLink>
          </li>

          <li className="nav-item">
            <hr />
          </li>

          <li className="nav-item">
            <a className="nav-link" href="../index.html">
              <i className="feather-icon icon-log-out me-2"></i>Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBarCus;
