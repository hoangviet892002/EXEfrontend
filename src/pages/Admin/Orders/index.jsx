import React from "react";
import { SideBar, TopBar } from "../../../components";
import Container from "./Container";

const OrdersAdminPage = () => {
  return (
    <div>
      <SideBar />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersAdminPage;
