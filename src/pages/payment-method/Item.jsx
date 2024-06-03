const Item = () => {
  return (
    <li className="list-group-item px-0 py-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            src="../assets/images/svg-graphics/mastercard.svg"
            alt=""
            className="me-3"
          />
          <div>
            <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
            <p className="mb-0 small">Expires in 03/2026</p>
          </div>
        </div>
        <div>
          <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
            Remove
          </a>
        </div>
      </div>
    </li>
  );
};
export default Item;
