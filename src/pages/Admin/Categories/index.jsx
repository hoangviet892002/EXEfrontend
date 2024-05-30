import React from "react";
import { SideBar, TopBar } from "../../../components";
import Container from "./Container";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

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
      <EditForm />
    </div>
  );
};

export default Categories;
