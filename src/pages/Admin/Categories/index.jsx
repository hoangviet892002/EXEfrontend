import React from "react";
import { SideBar, TopBar } from "../../../components";
import Container from "./Container";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Categories = () => {
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
      <AddForm />
      <EditForm />
    </div>
  );
};

export default Categories;
