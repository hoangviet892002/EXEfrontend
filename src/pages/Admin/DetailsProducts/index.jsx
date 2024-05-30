import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
import AddImage from "./AddImage";

const DetailsProducts = () => {
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

export default DetailsProducts;
