import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbellico from "../images/dumbelico.png";
import { loadCoachesProfile, returnArr } from "../api/api";
import Button from "../reusableComponents/Button";
import vid from "../images/My Post.mp4";

const Profile = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState(0);

  let history = useHistory();
  var Email = localStorage.getItem("email");
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    await loadCoachesProfile();
    let arr = returnArr();
    let DataArray = [];
    var value;
    var obj;
    for (let i = 0; i < arr.length; i++) {
      obj = arr[i];
      for (var key in obj) {
        value = obj[key];
        if (value === Email) {
          for (var keys in obj) {
            value = obj[keys];
            DataArray.push(value);
          }
        }
      }
    }

    setfirstname(DataArray[1]);
    setlastname(DataArray[2]);
    setphone(DataArray[4]);
  };

  const delUser = () => {
    history.push("/deleteTrainer");
  };

  const returnHome = () => {
    history.push("/Home");
  };

  const LoadCerts = () => {
    history.push("/UploadCert");
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <Button
                  type="primary"
                  size="sm"
                  handleClick={returnHome}
                  label="Home"
                ></Button>
                <li className="breadcrumb-item active" aria-current="page">
                  Coach Profile
                </li>
                <li>
                  <video
                    width="450"
                    height="50"
                    style={{
                      marginBottom: "-20px",
                      marginTop: "-20px",
                      marginLeft: "50%",
                    }}
                    autoPlay
                    muted
                    loop
                  >
                    <source src={vid} type="video/mp4"></source>
                    Your browser does not support the video tag.
                  </video>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={dumbellico}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                ></img>
                <h5 className="my-3">
                  {firstname} {lastname}
                </h5>
                <p className="text-muted mb-1">Personal Trainer</p>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-1"
                  >
                    upload
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0" style={{ marginleft: "60%" }}>
              <div className="card-body p-0">
                <p>Get Hired with hireAtrainer.com!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {firstname} {lastname}
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{Email}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{phone}</p>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
            <button
              className="btn btn-danger btn-md"
              onClick={delUser}
              style={{ marginRight: "1%" }}
            >
              DELETE ACCOUNT
            </button>
            <Button
              type="primary"
              size="md"
              label="Upload certifications"
              handleClick={LoadCerts}
            ></Button>
          </div>
        </div>
      </div>
      <footer className="py-3 my-4 ">© 2021 hireAtrainer, Inc</footer>
    </section>
  );
};

export default Profile;
