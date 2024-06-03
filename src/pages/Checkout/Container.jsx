import Address from "./Address";
import Instructions from "./Instructions";
import OrderDetail from "./OrderDetail";
import Payment from "./Payment";

const Container = () => {
  return (
    <section className="mb-lg-14 mb-8 mt-8">
      <div className="container">
        <div>
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
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
