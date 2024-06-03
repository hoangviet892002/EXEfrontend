import ModelDelete from "./ModelDelete";
import ModelEdit from "./ModelEdit";

const Item = () => {
  return (
    <>
      <div className="col-lg-5 col-xxl-4 col-12 mb-4">
        <div className="border p-6 rounded-3">
          <div className="form-check mb-4">
            <label
              className="form-check-label text-dark fw-semi-bold"
              for="homeRadio"
            >
              Home
            </label>
          </div>

          <p className="mb-6">
            Jitu Chauhan
            <br />
            4450 North Avenue Oakland, <br />
            Nebraska, United States,
            <br />
            402-776-1106
          </p>

          <a href="#" className="btn btn-info btn-sm">
            Default address
          </a>
          <div className="mt-4">
            <a
              href="#"
              className="text-inherit"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Edit
            </a>
            <a
              href="#"
              className="text-danger ms-3"
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
