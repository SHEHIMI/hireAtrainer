import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbell from "../images/dumbelico.png";
import { insertCert } from "../api/api";


const UploadCert = () => {
  const [certification, setCertification] = useState("");

  let id = localStorage.getItem("email");
  const save = () => {
    let data = { cert: certification, email: id };

    insertCert(data);
  };

  console.log(certification);

  let history = useHistory();
  const imageClick = () => {
    history.push("/Home");
  };

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div
        className="text-center"
        style={{ width: "45%", marginLeft: "28%", height: "1000px" }}
      >
        <img
          src={dumbell}
          width="100 px"
          height="100 px"
          className="d-inline-block align-text-top"
          alt=""
          onClick={imageClick}
        ></img>
        <div className="form-group"></div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setCertification(e.target.value);
            }}
          ></input>
          <label htmlFor="floatingInput">certificate</label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="button" className="btn btn-primary" onClick={save}>
            save
          </button>
        </div>
      </div>
      <footer className="py-3 my-4 ">© 2021 hireAtrainer, Inc</footer>
    </div>
  );
};
export default UploadCert;
