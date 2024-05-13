import Address from "./Address";
import Instructions from "./Instructions";
import OrderDetail from "./OrderDetail";
import Payment from "./Payment";

const Container = () => {
  return (
    <section class="mb-lg-14 mb-8 mt-8">
      <div class="container">
        <div>
          <div class="row">
            <div class="col-lg-7 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <Address />

                <Instructions />

                <Payment />
              </div>
            </div>

            <OrderDetail />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Container;
