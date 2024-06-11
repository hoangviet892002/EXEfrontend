import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";

const SideBarCus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(logout());
  };
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
              <i className="feather-icon icon-shopping-bag me-2"></i>
              {t("Your Orders")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/setting"
            >
              <i className="feather-icon icon-settings me-2"></i>
              {t("Settings")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/address"
            >
              <i className="feather-icon icon-map-pin me-2"></i>
              {t("Address")}
            </NavLink>
          </li>

          <li className="nav-item">
            <hr />
          </li>

          <li className="nav-item">
            <a className="nav-link" onClick={handleLogout}>
              <i className="feather-icon icon-log-out me-2"></i>
              {t("Log out")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBarCus;
