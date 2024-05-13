import { Footer, Navbar, ShopCart, SideBarCus } from "../../components";
import Container from "./Container";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div class="container">
          <div class="row">
            <SideBarCus />
            <div class="col-lg-9 col-md-8 col-12">
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
