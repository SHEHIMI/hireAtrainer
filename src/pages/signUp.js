import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbell from "../images/dumbelico.png";
import { InsertSignUpdata, Verify } from "../api/api";
const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);
  const [signUpCheck, setsignUpCheck] = useState("");

  useEffect(() => {
    // storing input name
    localStorage.setItem("email", email);
  }, [email]);

  const insertdata = async () => {
    let data = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      password: password,
    };
    if (
      firstname === "" ||
      lastname === "" ||
      phone === "" ||
      email === "" ||
      password === ""
    ) {
      setsignUpCheck("Please fill all fields!");
    } else {
      await InsertSignUpdata(data);

      if (Verify() === "true") {
        console.log("success");
        alert("Successful registration");
        history.push("/Home");
      } else {
        setsignUpCheck("Email exists!");
        console.log("fail");
      }
    }
  };

  let history = useHistory();
  const imageClick = () => {
    history.push("/");
  };

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div className="text-center" style={{ width: "45%", marginLeft: "28%" }}>
        <img
          src={dumbell}
          width="100 px"
          height="100 px"
          className="d-inline-block align-text-top"
          alt=""
          onClick={imageClick}
        ></img>

        <h2>Sign Up</h2>
        <div className="form-group">
          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First Name"
                required="required"
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
              ></input>
            </div>
            <div className="col" style={{ marginBottom: "15px" }}>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Last Name"
                required="required"
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating" style={{ marginTop: "15px" }}>
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="number"
            onChange={(e) => {
              setphone(e.target.value);
            }}
          ></input>
          <label htmlFor="floatingInput">Phone</label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={insertdata}
          >
            Register
          </button>
          <p style={{ color: "red", fontSize: "20px" }}>{signUpCheck}</p>
        </div>
        <p style={{ color: "blue" }}></p>
        <p style={{ marginTop: "10px" }}>
          already have an account?
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </p>
        <p>not a personal trainer?</p>
        <Link to="/GoogleLogin" className="nav-link">
          Login here
        </Link>

        <span style={{ color: "lightgray" }}>
          {" "}
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
          ------------------------------------------------------------------------------------------
        </span>
      </div>
      <footer className="py-3 my-4 ">© 2021 hireAtrainer, Inc</footer>
    </div>
  );
};

export default SignUp;
