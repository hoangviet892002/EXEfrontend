import ModelDelete from "./ModelDelete";
import ModelEdit from "./ModelEdit";

const Item = () => {
  return (
    <>
      <div class="col-lg-5 col-xxl-4 col-12 mb-4">
        <div class="border p-6 rounded-3">
          <div class="form-check mb-4">
            <label
              class="form-check-label text-dark fw-semi-bold"
              for="homeRadio"
            >
              Home
            </label>
          </div>

          <p class="mb-6">
            Jitu Chauhan
            <br />
            4450 North Avenue Oakland, <br />
            Nebraska, United States,
            <br />
            402-776-1106
          </p>

          <a href="#" class="btn btn-info btn-sm">
            Default address
          </a>
          <div class="mt-4">
            <a
              href="#"
              class="text-inherit"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Edit
            </a>
            <a
              href="#"
              class="text-danger ms-3"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
      <ModelDelete />
      <ModelEdit />
    </>
  );
};
export default Item;
