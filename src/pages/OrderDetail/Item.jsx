const Item = () => {
  return (
    <tr>
      <td className="align-middle border-top-0 w-0">
        <a href="#">
          <img
            src="../assets/images/products/product-img-1.jpg"
            alt="Ecommerce"
            className="icon-shape icon-xl"
          />
        </a>
      </td>
      <td className="align-middle border-top-0">
        <a href="#" className="fw-semi-bold text-inherit">
          <h6 className="mb-0">Haldiram's Nagpur Aloo Bhujia</h6>
        </a>
        <span>
          <small className="text-muted">400g</small>
        </span>
      </td>
      <td className="align-middle border-top-0">
        <a href="#" className="text-inherit">
          #14899
        </a>
      </td>

      <td className="align-middle border-top-0">1</td>

      <td className="align-middle border-top-0">$15.00</td>
    </tr>
  );
};
export default Item;
