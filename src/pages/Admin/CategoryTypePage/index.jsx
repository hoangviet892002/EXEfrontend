import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const CategoryType = () => {
  return (
    <>
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
    </>
  );
};

export default CategoryType;
