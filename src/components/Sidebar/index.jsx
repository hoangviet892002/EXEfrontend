import React from "react";
import logo from "../../../assets/images/logo/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { changeLanguage } from "../../redux/actions/languagesAction";
import { useDispatch, useSelector } from "react-redux";
const SideBar = () => {
  const options = ["en", "vi"];
  const language = useSelector((state) => state.languages.languages);
  const dispatch = useDispatch();
  return (
    <>
      <div className="leftside-menu">
        <Link to="/admin" className="logo text-center logo-light">
          <span className="logo-lg">
            <img src={logo} alt="" height="16" />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo_sm.png" alt="" height="16" />
          </span>
        </Link>

        <div className="h-100" id="leftside-menu-container" data-simplebar>
          <ul className="side-nav">
            <NavLink className="side-nav-item" to="/admin/" end>
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a className="side-nav-link">
                    <i className="feather-icon icon-home"></i>
                    <span> Home </span>
                  </a>
                </div>
              )}
            </NavLink>
            <NavLink className="side-nav-item" to="/admin/products">
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a className="side-nav-link">
                    <i className="feather-icon icon-home"></i>
                    <span> Products </span>
                  </a>
                </div>
              )}
            </NavLink>

            <NavLink className="side-nav-item" to="/admin/categories">
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a className="side-nav-link">
                    <i className="feather-icon icon-home"></i>
                    <span> Category </span>
                  </a>
                </div>
              )}
            </NavLink>
            <div className="side-nav-item items-center">
              <button
                type="button"
                class="  btn btn-primary mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  const newLanguage =
                    language === options[0] ? options[1] : options[0];
                  dispatch(changeLanguage(newLanguage));
                }}
              >
                {language}
              </button>
            </div>
          </ul>

          <div className="help-box text-white text-center">
            <a
              href="javascript: void(0);"
              className="float-end close-btn text-white"
            >
              <i className="mdi mdi-close"></i>
            </a>
            <img
              src="assets/images/help-icon.svg"
              height="90"
              alt="Helper Icon Image"
            />
            <h5 className="mt-3">Unlimited Access</h5>
            <p className="mb-3">
              Upgrade to plan to get access to unlimited reports
            </p>
            <a href="javascript: void(0);" className="btn btn-secondary btn-sm">
              Upgrade
            </a>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
