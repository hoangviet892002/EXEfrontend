import { CardProductV2 } from "../../components";
const SpecialOffers = () => {
  return (
    <section>
      <div class="container mb-9">
        <div class="row">
          <div class="col-md-12 mb-6">
            <h3 class="mb-0">Daily Best Sells</h3>
          </div>
        </div>

        <div class="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div
              class=" pt-8 px-8 rounded-3"
              style={{
                background:
                  "url(assets/images/banner/banner-deal.jpg) no-repeat",
                backgroundSize: "cover",
                height: "400px",
              }}
            >
              <div>
                <h3 class="fw-bold text-white">100% Organic Coffee Beans.</h3>
                <p class="text-white">Get the best deal before close.</p>
                <a href="#!" class="btn btn-primary">
                  Shop Now <i class="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <CardProductV2 />
          <CardProductV2 />
          <CardProductV2 />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
