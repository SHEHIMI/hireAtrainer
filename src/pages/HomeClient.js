import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moh from "../images/mohammadAli.jpg";
import gym from "../images/gym1.jpg";
import dumbell from "../images/dumbell.png";
import quote2 from "../images/quote2.jpg";

import quote from "../images/quote.jpg";
const HomeCLient = () => {
  let history = useHistory();
  useEffect(() => {}, []);
  const refreshPage = () => {
    window.location.reload();
  };

  const OpenProfile = () => {
    history.push("/GoogleLogout");
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${gym})` }}>
      <nav
        style={{
          marginBottom: "10px",
          marginLeft: "-12px",
          marginRight: "-12px",
        }}
        className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-light "
      >
        <a className="navbar-brand" href="#">
          <img
            src={dumbell}
            width="75px"
            height="65px"
            className="d-inline-block align-text-top"
            style={{ marginLeft: "10px" }}
            onClick={refreshPage}
            alt=""
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/TrainerClient"
                className="nav-link"
                aria-current="page"
                style={{
                  marginRight: "20px",
                  color: "black",
                  fontFamily: "cursive",
                }}
              >
                Personal Trainers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-link"
                style={{
                  marginRight: "20px",
                  color: "black",
                  fontFamily: "cursive",
                }}
              >
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/workoutPlans"
                className="nav-link "
                style={{
                  marginRight: "20px",
                  color: "black",
                  fontFamily: "cursive",
                }}
              >
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/musicClient"
                className="nav-link "
                href="#"
                style={{
                  marginRight: "20px",
                  color: "black",
                  fontFamily: "cursive",
                }}
              >
                Music
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={OpenProfile}
                className="btn btn-sm btn-outline-danger"
                style={{
                  marginLeft: "450px",
                  marginTop: "6px",
                  marginRight: "2px",
                  width: "17%",
                  height: "35px",
                  marginBottom: "5px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"></path>
                </svg>
                Logout
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={quote} alt="1" className="d-block w-100"></img>
            </div>
            <div className="carousel-item">
              <img src={moh} alt="2" className="d-block w-100"></img>
            </div>
            <div className="carousel-item">
              <img src={quote2} alt="3" className="d-block w-100"></img>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <footer className="py-3 my-4 " style={{ color: "lightslategray" }}>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2021 hireAtrainer, Inc</p>
      </footer>
    </div>
  );
};

export default HomeCLient;
