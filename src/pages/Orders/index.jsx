import { Footer, Navbar, ShopCart, SideBarCus } from "../../components";
import Container from "./Container";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <SideBarCus />
            <div className="col-lg-9 col-md-8 col-12">
              <Container />
            </div>
          </div>
        </div>
      </section>
      <ShopCart />
      <Footer />
    </>
  );
};
export default OrdersPage;
