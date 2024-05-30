import { ItemWish } from "../../components";
import useHook from "./hooks/useHook";
const WishContainer = () => {
  const { wishList, clearWish } = useHook();
  return (
    <>
      <section class="my-14">
        <div class="container">
          <div class="row">
            <div class="offset-lg-1 col-lg-10">
              <div class="mb-8">
                <h1 class="mb-1">My Wishlist</h1>
                <p>There are {wishList.length} products in this wishlist.</p>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    clearWish();
                  }}
                >
                  Clear
                </button>
              </div>
              <div>
                <div class="table-responsive">
                  <table class="table text-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Actions</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishList.map((wish) => (
                        <ItemWish product={wish} />
                      ))}
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
