import React from "react";
import logo from "../../../assets/images/logo/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div class="leftside-menu">
        <Link to="/admin" class="logo text-center logo-light">
          <span class="logo-lg">
            <img src={logo} alt="" height="16" />
          </span>
          <span class="logo-sm">
            <img src="assets/images/logo_sm.png" alt="" height="16" />
          </span>
        </Link>

        <div class="h-100" id="leftside-menu-container" data-simplebar>
          <ul class="side-nav">
            <NavLink class="side-nav-item" to="/admin/" end>
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a class="side-nav-link">
                    <i class="feather-icon icon-home"></i>
                    <span> Home </span>
                  </a>
                </div>
              )}
            </NavLink>
            <NavLink class="side-nav-item" to="/admin/products">
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a class="side-nav-link">
                    <i class="feather-icon icon-home"></i>
                    <span> Products </span>
                  </a>
                </div>
              )}
            </NavLink>

            <NavLink class="side-nav-item" to="/admin/categories">
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a class="side-nav-link">
                    <i class="feather-icon icon-home"></i>
                    <span> Category </span>
                  </a>
                </div>
              )}
            </NavLink>
            <NavLink class="side-nav-item" to="/admin/orders">
              {({ isActive }) => (
                <div
                  style={{
                    background: isActive ? "#336699" : "transparent",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <a class="side-nav-link">
                    <i class="feather-icon icon-home"></i>
                    <span> Orders </span>
                  </a>
                </div>
              )}
            </NavLink>
          </ul>

          <div class="help-box text-white text-center">
            <a
              href="javascript: void(0);"
              class="float-end close-btn text-white"
            >
              <i class="mdi mdi-close"></i>
            </a>
            <img
              src="assets/images/help-icon.svg"
              height="90"
              alt="Helper Icon Image"
            />
            <h5 class="mt-3">Unlimited Access</h5>
            <p class="mb-3">
              Upgrade to plan to get access to unlimited reports
            </p>
            <a href="javascript: void(0);" class="btn btn-secondary btn-sm">
              Upgrade
            </a>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
