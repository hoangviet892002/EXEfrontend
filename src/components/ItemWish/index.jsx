const ItemWish = () => {
  return (
    <>
      <tr>
        <td class="align-middle">
          <a href="#">
            <img
              src="../assets/images/products/product-img-18.jpg"
              class="img-fluid icon-shape icon-xxl"
              alt=""
            />
          </a>
        </td>
        <td class="align-middle">
          <div>
            <h5 class="fs-6 mb-0">
              <a href="#" class="text-inherit">
                Organic Banana
              </a>
            </h5>
            <small>$.98 / lb</small>
          </div>
        </td>
        <td class="align-middle">$35.00</td>
        <td class="align-middle">
          <span class="badge bg-success">In Stock</span>
        </td>
        <td class="align-middle">
          <div class="btn btn-primary btn-sm">Add to Cart</div>
        </td>
        <td class="align-middle text-center">
          <a
            href="#"
            class="text-muted"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Delete"
          >
            <i class="feather-icon icon-trash-2"></i>
          </a>
        </td>
      </tr>
    </>
  );
};
export default ItemWish;
