import React from "react";
import useHook from "./hooks/useHook";

const Container = () => {
  const { input, setInput, handleSubmit, loading } = useHook();
  return (
    <section class="my-lg-14 my-8">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bannerexe-639ce.appspot.com/o/signup-g.svg?alt=media&token=9edf7b15-5a62-42ef-bebc-6e2a11132592"
              alt=""
              class="img-fluid"
            />
          </div>

          <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div class="mb-lg-9 mb-5">
              <h1 class="mb-1 h2 fw-bold">Get Start Shopping</h1>
              <p>Welcome to FreshCart! Enter your email to get started.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    aria-label="First name"
                    value={input.phone}
                    onChange={(e) =>
                      setInput({ ...input, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    aria-label="Last name"
                    value={input.fullName}
                    onChange={(e) =>
                      setInput({ ...input, fullName: e.target.value })
                    }
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Username"
                    value={input.username}
                    onChange={(e) =>
                      setInput({ ...input, username: e.target.value })
                    }
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    value={input.password}
                    onChange={(e) =>
                      setInput({ ...input, password: e.target.value })
                    }
                    required
                  />
                </div>

                <div class="col-12 d-grid">
                  {loading && (
                    <button class="btn btn-primary" type="button" disabled>
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  )}
                  {!loading && (
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  )}
                </div>

                <p>
                  <small>
                    By continuing, you agree to our
                    <a href="#!"> Terms of Service</a> &
                    <a href="#!">Privacy Policy</a>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
