import { CardProductV1 } from "../../components";
import useHook from "./hooks/useHook";
const NewProduct = () => {
  const { newProduct } = useHook();
  const categories = [
    {
      id: "fruitsandveg",
      name: "Fruits & Vegetables",
      products: [
        { id: 1, name: "Apple", price: 1.99 },
        { id: 2, name: "Banana", price: 0.99 },
        { id: 2, name: "Banana", price: 0.99 },
        { id: 2, name: "Banana", price: 0.99 },
      ],
    },
    {
      id: "snackmunchies",
      name: "Snack & Munchies",
      products: [
        { id: 1, name: "Chips", price: 2.49 },
        { id: 2, name: "Cookies", price: 1.79 },
      ],
    },
    {
      id: "bakery",
      name: "Bakery & Biscuits",
      products: [
        { id: 1, name: "Bread", price: 3.49 },
        { id: 2, name: "Croissant", price: 2.99 },
      ],
    },
  ];

  return (
    <section className="mb-lg-14 mb-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
              <div className="mb-5 mb-xl-0">
                <h3 className="mb-0">New Products</h3>
                <p className="mb-0">New products with updated stocks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                {newProduct.map((product) => (
                  <CardProductV1 product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
