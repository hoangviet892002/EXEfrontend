import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const {t} = useTranslation()
  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="offset-lg-1 col-lg-10  py-8 py-xl-0">
            <div className=" mb-10 mb-xxl-0">
              <a href="../index.html">
                {" "}
                <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
              </a>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className=" mb-6 mb-lg-0">
                  <h1>{t("Something’s wrong here...")}</h1>
                  <p className="mb-8">
              {t("We can’t find the page you’re looking for.")}
                    <br />
                    {t("Check out our help center or head back to home.")}
                  </p>

                  <Link to="/" className="btn btn-primary ms-2">
                    {t("Back to home")}
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    src="../assets/images/svg-graphics/error.svg"
                    alt=""
                    className="img-fluid"
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
