import React from "react";
import { SideBar } from "../../../components";
import Container from "./Container";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { useTranslation } from "react-i18next";

const CategoryType = () => {
  const { t } = useTranslation();
  return (
    <>
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
    </>
  );
};

export default CategoryType;
