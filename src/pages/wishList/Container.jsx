import { ItemWish } from "../../components";
const WishContainer = () => {
  return (
    <>
      <section class="my-14">
        <div class="container">
          <div class="row">
            <div class="offset-lg-1 col-lg-10">
              <div class="mb-8">
                <h1 class="mb-1">My Wishlist</h1>
                <p>There are 5 products in this wishlist.</p>
              </div>
              <div>
                <div class="table-responsive">
                  <table class="table text-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ItemWish />
                      <ItemWish />
                      <ItemWish />
                      <ItemWish />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishContainer;
