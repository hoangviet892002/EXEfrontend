import { ItemWish } from "../../components";
import useHook from "./hooks/useHook";
const WishContainer = () => {
  const { wishList, clearWish } = useHook();
  return (
    <>
      <section className="my-14">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <div className="mb-8">
                <h1 className="mb-1">My Wishlist</h1>
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
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Actions</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishList.map((wish, index) => (
                        <ItemWish product={wish} key={index} />
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
