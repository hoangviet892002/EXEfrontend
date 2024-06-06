import { useState } from "react";
import { Footer, Navbar, ShopCart } from "../../components";
import { useLogin } from "../../hook";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
  };
  return (
    <>
      <Navbar />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img
                src="../assets/images/svg-graphics/signin-g.svg"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">{t("Sign in to FreshCart")}</h1>
                <p>{t("Welcome back to FreshCart! Enter your email to get started.")}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={t("User Name")}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t("Password")}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {t("Remember me")}
                      </label>
                    </div>
                    <div>
                      {t("Forgot password?")}
                      <a href="forgot-password.html">{t("Reset It")}</a>
                    </div>
                  </div>

                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary">
                      {t("Sign In")}
                    </button>
                  </div>

                  <div>
                    {t("Don’t have an account?")} <a href="signup.html">{t("Sign Up")}</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ShopCart />
      <Footer />
    </>
  );
};
export default LoginPage;
