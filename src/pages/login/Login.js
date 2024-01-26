
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import 'animate.css';
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import "./Login.css";



const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return redirect("/");

  }

  return (
    <>
      <div className="overflow-hidden">
        <div className="row flex-column flex-md-row">
          <Link
            to="/"
            className="col p-4 vh-100 left-col d-flex justify-content-center align-items-center"
          >
            <img
              className="image-fluid w-75 animate__animated animate__fadeInUp nav-img"
              src="/img/logo-no-background.svg"
              alt=""
              style={{}}
              
            />
          </Link>
          <div className="col p-4 right-col d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center text-light">
              Log in into your existing account
            </p>
            <div className="row m-0 p-0 justify-content-start justify-content-md-center">
              <div className="col col-md-8">
                <hr />
                <form onSubmit={(e) => e.onSubmit(e)}>
                  <div className="mb-3">
                    <label for="email" className="form-label text-light">
                      E-mail
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label for="password" className="form-label text-light">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      minLength="6"
                      required
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsConditions"
                    name="termsConditions"
                  />
                  <label className="form-check-label" for="termsConditions">
                    I agree to terms & conditions
                  </label>
                </div> */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: "#da0037", color: "white" }}
                      //onClick={handleLogin}
                    >
                      Login
                      {/* {isLoading ? "Loading..." : "Log In"} */}
                    </button>
                  </div>
                  {/* <p className="text-end fs-6 fw-medium mt-3">
                  <Link
                    to="/forgot-password"
                    className="text-decoration-none text-black text-body-secondary"
                  >
                    Forgot Password?
                  </Link>
                </p> */}
                </form>
              </div>
            </div>
            <p className="text-center mt-3 text-light">
              Don't have an account?
              <Link
                to="/Signup"
                className="text-decoration-none"
                style={{ color: "#da0037" }}
              >
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
