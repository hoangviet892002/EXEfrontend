const Product = ({ item }) => {
  return (
    <li class="list-group-item px-4 py-3">
      <div class="row align-items-center">
        <div class="col-2 col-md-2">
          <img src={item.thumbnail} alt="Ecommerce" class="img-fluid" />
        </div>
        <div class="col-5 col-md-5">
          <h6 class="mb-0">{item.productName}</h6>
        </div>
        <div class="col-2 col-md-2 text-center text-muted">
          <span>{item.number}</span>
        </div>
        <div class="col-3 text-lg-end text-start text-md-end col-md-3">
          <span class="fw-bold">${item.price}</span>
        </div>
      </div>
    </li>
  );
};
export default Product;
