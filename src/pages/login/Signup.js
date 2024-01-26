import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import 'animate.css';
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
import "./Login.css";

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };



    if (isAuthenticated) {
        return redirect("/");

    }
    if (accountCreated) {
        return redirect("/login");
    }

    return (
        
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
              
            />
          </Link>
          <div className="col p-4 right-col d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown">
            <h1 className="text-center">Sign Up</h1>
            <p className="text-center text-light">
            Create your Account
            </p>
            <div className="row m-0 p-0 justify-content-start justify-content-md-center">
              <div className="col col-md-8">
                <hr />
                <form onSubmit={(e) => e.onSubmit(e)}>
                <div className="mb-3">
                    <label for="firstname" className="form-label text-light">
                      First Name
                    </label>
                    <input
                       className='form-control'
                       type='text'
                       placeholder='First Name*'
                       name='first_name'
                       value={first_name}
                       onChange={e => onChange(e)}
                       required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="lastname" className="form-label text-light">
                      Last Name
                    </label>
                    <input
                       className='form-control'
                       type='text'
                       placeholder='Last Name*'
                       name='last_name'
                       value={last_name}
                       onChange={e => onChange(e)}
                       required
                    />
                  </div>

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

                  <div className="mb-4">
                    <label for="confirmpassword" className="form-label text-light">
                      Confirm Password
                    </label>
                    <input
                       className='form-control'
                       type='password'
                       placeholder='Confirm Password*'
                       name='re_password'
                       value={re_password}
                       onChange={e => onChange(e)}
                       minLength='6'
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
                    
                    >
                      SignUp
                      {/* {isLoading ? "Loading..." : "Log In"} */}
                    </button>
                  </div>
                 
                </form>
              </div>
            </div>
            <p className="text-center mt-3 text-light">
              Already have an account?
              <Link
                to="/login"
                className="text-decoration-none"
                style={{ color: "#da0037" }}
              >
                {" "}
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
  
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { signup })(Signup);