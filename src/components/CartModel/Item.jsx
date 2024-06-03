import useHook from "./hooks/useHook";

const Item = ({ item }) => {
  const { handleRemoveItem, UpdateQuantity } = useHook();
  return (
    <li className="list-group-item py-3 px-0 ">
      <div className="row align-items-center">
        <div className="col-2">
          <img src={item.thumbnail} alt="Ecommerce" className="img-fluid" />
        </div>
        <div className="col-5">
          <h6 className="mb-0">{item.productName}</h6>
          <div className="mt-2 small">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleRemoveItem(item.id);
              }}
              className="text-decoration-none"
            >
              <span className="me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </span>
              Remove
            </a>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group flex-nowrap justify-content-center">
            <input
              type="button"
              defaultValue="-"
              className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
              data-field="quantity"
              onClick={(e) => {
                e.preventDefault();
                if (item.number > 1) UpdateQuantity(item, -1);
              }}
            />
            <input
              type="number"
              step="1"
              max="10"
              defaultValue={item.number}
              name="quantity"
              className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
            />
            <input
              type="button"
              defaultValue="+"
              className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
              data-field="quantity"
              onClick={(e) => {
                e.preventDefault();
                UpdateQuantity(item, 1);
              }}
            />
          </div>
        </div>
        <div className="col-2 text-end">
          <span className="fw-bold">${item.price}</span>
        </div>
      </div>
    </li>
  );
};
export default Item;
