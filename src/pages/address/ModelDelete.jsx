const ModelDelete = () => {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <h6>Are you sure you want to delete this address?</h6>
            <p className="mb-6">
              Jitu Chauhan
              <br />
              4450 North Avenue Oakland, <br />
              Nebraska, United States,
              <br />
              402-776-1106
            </p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-gray-400"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelDelete;
