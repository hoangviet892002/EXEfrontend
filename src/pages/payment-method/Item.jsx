const Item = () => {
  return (
    <li class="list-group-item px-0 py-5">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img
            src="../assets/images/svg-graphics/mastercard.svg"
            alt=""
            class="me-3"
          />
          <div>
            <h5 class="mb-0 h6">Mastercard ending in 1234</h5>
            <p class="mb-0 small">Expires in 03/2026</p>
          </div>
        </div>
        <div>
          <a href="#" class="btn btn-outline-gray-400 text-muted btn-sm">
            Remove
          </a>
        </div>
      </div>
    </li>
  );
};
export default Item;
