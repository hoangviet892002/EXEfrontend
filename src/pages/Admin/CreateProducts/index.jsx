import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
const CreateProducts = () => {
  return (
    <div>
      <SideBar />
      <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
