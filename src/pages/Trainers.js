import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbell from "../images/dumbelico.png";
import { loadCoaches } from "../api/api";

const Trainer = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await loadCoaches();
    setUser(data.data);
  };

  let history = useHistory();
  const imageClick = () => {
    history.push("/Home");
  };

  return (
    <div className="container">
      <img
        src={dumbell}
        width="100 px"
        height="100 px"
        className="d-inline-block align-text-top"
        alt=""
        onClick={imageClick}
        style={{ marginBottom: "25px" }}
      ></img>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">firstname</th>
            <th scope="col">lastname</th>
            <th scope="col">phoneNumber</th>
            <th scope="col">certificate</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {user
            ? user.map((row, index) => (
                <tr key={index}>
                  {/* <th scope="row">1</th> */}
                  <td>{row.firstname}</td>
                  <td>{row.lastname}</td>
                  <td>{row.phone}</td>
                  <td>{row.certification}</td>
                  <td>{<a href="https://web.whatsapp.com/">Contact</a>}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Trainer;
