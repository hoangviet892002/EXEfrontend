import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
const CreateProducts = () => {
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

export default CreateProducts;
