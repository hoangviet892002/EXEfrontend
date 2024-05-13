import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div class="container d-flex flex-column">
        <div class="row min-vh-100 justify-content-center align-items-center">
          <div class="offset-lg-1 col-lg-10  py-8 py-xl-0">
            <div class=" mb-10 mb-xxl-0">
              <a href="../index.html">
                {" "}
                <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
              </a>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-6">
                <div class=" mb-6 mb-lg-0">
                  <h1>Something’s wrong here...</h1>
                  <p class="mb-8">
                    We can’t find the page you’re looking for.
                    <br />
                    Check out our help center or head back to home.
                  </p>

                  <Link to="/" class="btn btn-primary ms-2">
                    Back to home
                  </Link>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <img
                    src="../assets/images/svg-graphics/error.svg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
