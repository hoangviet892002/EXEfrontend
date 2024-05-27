import React from "react";
import { SideBar, TopBar } from "../../../components";
import Container from "./Container";
import AddForm from "./AddForm";

const Categories = () => {
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
      <AddForm />
    </div>
  );
};

export default Categories;
