const Product = ({ item }) => {
  return (
    <li className="list-group-item px-4 py-3">
      <div className="row align-items-center">
        <div className="col-2 col-md-2">
          <img src={item.thumbnail} alt="Ecommerce" className="img-fluid" />
        </div>
        <div className="col-5 col-md-5">
          <h6 className="mb-0">{item.productName}</h6>
        </div>
        <div className="col-2 col-md-2 text-center text-muted">
          <span>{item.number}</span>
        </div>
        <div className="col-3 text-lg-end text-start text-md-end col-md-3">
          <span className="fw-bold">${item.price}</span>
        </div>
      </div>
    </li>
  );
};
export default Product;
