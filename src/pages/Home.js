import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moh from "../images/mohammadAli.jpg";
import gym from "../images/gym1.jpg";
import dumbell from "../images/dumbell.png";
import quote2 from "../images/quote2.jpg";

import quote from "../images/quote.jpg";
const Home = () => {
  let history = useHistory();
  useEffect(() => {}, []);
  const refreshPage = () => {
    window.location.reload();
  };

  const OpenProfile = () => {
    history.push("/Profile");
  };
  const OpenNews = () => {
    history.push("/NewsApi");
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
                to="/Trainers"
                className="nav-link "
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
                to="/Music"
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
                className="btn btn-sm btn-outline-dark"
                style={{
                  marginLeft: "550px",
                  marginTop: "6px",
                  marginRight: "25px",
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
                Profile
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={OpenNews}
                style={{
                  marginLeft: "20px",
                  marginTop: "6px",
                  width: "105%",
                  height: "35px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-newspaper"
                  marginLeft="5%"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                </svg>
                Jokes
              </button>
            </li>
          </ul>
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
              <img src={quote2} alt="2" className="d-block w-100"></img>
            </div>
            <div className="carousel-item">
              <img src={moh} alt="3" className="d-block w-100"></img>
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

export default Home;
