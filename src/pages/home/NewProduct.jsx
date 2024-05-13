import { CardProductV1 } from "../../components";
const NewProduct = () => {
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
              <div>
                <nav>
                  <ul
                    className="nav nav-pills nav-scroll border-bottom-0 gap-1"
                    id="nav-tab"
                    role="tablist"
                  >
                    {categories.map((category, index) => (
                      <li className="nav-item" key={category.id}>
                        <a
                          href="#"
                          className={
                            index === 0 ? "nav-link active" : "nav-link"
                          }
                          id={`nav-${category.id}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#nav-${category.id}`}
                          role="tab"
                          aria-controls={`nav-${category.id}`}
                          aria-selected={index === 0 ? "true" : "false"}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              {categories.map((category, index) => (
                <div
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`nav-${category.id}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.id}-tab`}
                  tabIndex="0"
                  key={category.id}
                >
                  <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                    {category.products.map((product) => (
                      <CardProductV1 />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
