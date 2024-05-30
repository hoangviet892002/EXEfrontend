import React from "react";
import { Footer, ModelProduct, Navbar, ShopCart } from "../../components";
import Container from "./Container";

const ShopV2 = () => {
  return (
    <>
      <Navbar />
      <Container />
      <ModelProduct />
      <ShopCart />
      <Footer />
    </>
  );
};

export default ShopV2;
