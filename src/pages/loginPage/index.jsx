import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar, ShopCart } from "../../components";
import { useLogin } from "../../hook";
import { useTranslation } from "react-i18next";
import useHook from "./hook/useHook";

const LoginPage = () => {
  const { t } = useTranslation();

  const { input, setInput, handleSubmit, loading } = useHook();

  return (
    <>
      <Navbar />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/signin-g.svg?alt=media&token=06b21841-8a7c-4efb-bec7-e893a7a5f9a6"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">{t("Sign in to FreshCart")}</h1>
                <p>
                  {t(
                    "Welcome back to FreshCart! Enter your email to get started."
                  )}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      value={input.email}
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
                      }
                      placeholder="User Name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      placeholder="Password"
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Sign In"}
                    </button>
                  </div>

                  <div>
                    Don’t have an account? <Link to="/register"> Sign Up</Link>
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
