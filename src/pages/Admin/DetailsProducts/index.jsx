import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
import AddImage from "./AddImage";

const DetailsProducts = () => {
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

export default DetailsProducts;
