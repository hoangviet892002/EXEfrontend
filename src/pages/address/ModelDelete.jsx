const ModelDelete = () => {
  return (
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">
              Delete address
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <h6>Are you sure you want to delete this address?</h6>
            <p class="mb-6">
              Jitu Chauhan
              <br />
              4450 North Avenue Oakland, <br />
              Nebraska, United States,
              <br />
              402-776-1106
            </p>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-gray-400"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelDelete;
