import { Footer, Navbar, ShopCart } from "../../components";
import React from "react";
import HeadDetail from "./Head";
import InforScreens from "./InformationAndReviews";
import RelationItem from "./RelationItem";

const ShopSingle = () => {
  return (
    <div>
      <Navbar />
      <HeadDetail />
      <InforScreens />
      <RelationItem />
      <ShopCart />
      <Footer />
    </div>
  );
};

export default ShopSingle;
