import { Footer, Navbar, ModelProduct, ShopCart } from "../../components";
import React from "react";
import HomeBanner from "./HomeBanner";
import Categories from "./Categories";
import NewProduct from "./NewProduct";
import SpecialOffers from "./SpecialOffers";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <Categories />
      <NewProduct />
      <SpecialOffers />
      <ModelProduct />
      <ShopCart />
      <Footer />
    </div>
  );
};

export default HomePage;
