import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { GlobalStateContext } from "../GlobalStateContext";
function Login() {
  const { isOpen } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-yw27.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className="container p-2">
      <div className="row mt-5">
        <div className="col text-center mt-5 p-5">
          <img src="media/images/signupConsole.png" />
        </div>
        <div className="col mt-5 p-5">
          <h2 className="text-muted">Login now</h2>
          <h5 className="mt-3 text-muted" style={{ fontWeight: "450" }}>
            Or track your existing application.
          </h5>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="email"
                name="email"
                onChange={handleOnChange}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <br />

            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={handleOnChange}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <br />
            <button
              className="p-2 btn btn-primary mb-5"
              style={{ width: "20%", height: "45px", fontSize: "18px" }}
            >
              Login
            </button>
          </form>

          <div style={{ marginTop: "-30px" }}>
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
          <br />
        </div>
      </div>
      <div className="row text-center text-muted px-5">
        <p style={{ fontSize: "14px" }} className="px-5">
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. Please visit{" "}
          <a href="" style={{ textDecoration: "none" }}>
            this article{" "}
          </a>
          to know more.
        </p>
        <p className="text-center text-muted px-5" style={{ fontSize: "14px" }}>
          By submitting your contact details, you authorize Zerodha to contact
          you even if you are registered on DND & conduct online KYC for trading
          & demat account opening as per KRA regulations and PMLA guidelines.
        </p>
        <p className="text-center text-muted px-5" style={{ fontSize: "14px" }}>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help,{" "}
          <a href="" style={{ textDecoration: "none" }}>
            click here
          </a>
          .
        </p>
      </div>
      <ToastContainer />
      {isOpen && (
        <div style={modalStyle}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/kite-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px"}}
                >
                  Kite
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Trading platform
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/console-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Console
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Backoffice
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/kite-connect-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Kite Connect
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Trading APIs
                </p>
              </div>
              <div className="col-3">
                <img
                  style={{ width: "140px", height: "50px", margin: "0 auto" }}
                  src="media/images/coin-logo.svg"
                />
                <br />
                <p
                  className="text-muted text-center blueHover"
                  style={{ fontSize: "18px" }}
                >
                  Coin
                </p>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "12px", marginTop: "-15px" }}
                >
                  Mutual funds
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <h6>Utilities</h6>
                <br />
                <p className="text-muted blueHover">Brokerage calculator </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Margin calculator
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Holiday calendar
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Markets
                </p>
              </div>
              <div className="col-4">
                <h6>Updates</h6>
                <br />
                <p className="text-muted blueHover">Z-Connect blog</p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Pulse News
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  Circulars / Bulletin
                </p>
                <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                  IPOs
                </p>
              </div>
              <div className="col-4">
                <h6 className="mb-4">Education</h6>
                <div className="row">
                  <div className="col">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        margin: "0 auto",
                      }}
                      src="media/images/varsity-logo.png"
                    />
                    <br/><br/>
                    <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                      Varsity
                    </p>
                  </div>
                  <div className="col">
                  <img
                      style={{
                        width: "30px",
                        height: "30px",
                        margin: "0 auto",
                      }}
                      src="media/images/tqna-logo.png"
                    />
                    <br/><br/>
                    <p className="text-muted blueHover" style={{ marginTop: "-10px" }}>
                     Trading Q&A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const modalStyle = {
  position: "fixed",
  top: "50%",
  right: "10%",
  width: "700px",
  height: "380px",
  background: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  padding: "15px",
  transform: "translateY(-77%)",
};
export default Login;
