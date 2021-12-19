import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbell from "../images/dumbelico.png";
import { postLoginData, VerifyLogin } from "../api/api";

const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const [loginCheck, setloginCheck] = useState("");

  useEffect(() => {
    // storing input name
    localStorage.setItem("email", email);
  }, [email]);

  const checkData = async () => {
    let data = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      setloginCheck("Please fill all fields!");
    } else {
      await postLoginData(data);
      if (VerifyLogin() === "true") {
        alert("successful login");
        history.push("/Home");
      } else {
        setloginCheck("incorrect email/password combination!");
      }
    }
  };

  let history = useHistory();
  const imageClick = () => {
    history.push("/");
  };

  return (
    <div style={{ backgroundColor: "lightgray", height: "800px" }}>
      <div className="text-center" style={{ width: "45%", marginLeft: "28%" }}>
        <img
          src={dumbell}
          width="100 px"
          height="100 px"
          className="d-inline-block align-text-top"
          alt=""
          onClick={imageClick}
        ></img>

        <h2>Login</h2>
        <div className="form-group"></div>
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

        <div style={{ marginTop: "10px" }}>
          <button type="button" className="btn btn-primary" onClick={checkData}>
            Login
          </button>
          <p style={{ color: "red", fontSize: "20px" }}>{}</p>
        </div>
        <p style={{ color: "red" }}>{loginCheck}</p>
        <p style={{ marginTop: "10px" }}>
          Don't have an account?
          <Link to="/SignUp" className="nav-link">
            SignUp
          </Link>
        </p>
      </div>
      <footer className="py-3 my-4 ">© 2021 hireAtrainer, Inc</footer>
    </div>
  );
};
export default Login;
