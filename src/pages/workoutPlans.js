import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gym from "../images/gym1.jpg";
import chest from "../images/chest.jpg";
import back from "../images/back.jpg";
import bi from "../images/biceps.jpg";
import tri from "../images/triceps.jpg";
import shoulder from "../images/shoulder.png";
import legs from "../images/legs.jpg";

const Workout = () => {
  useEffect(() => {}, []);

  const openClink = () => {
    return <p></p>;
  };
  return (
    <div
      style={{
        backgroundImage: `url(${gym})`,
        height: "1000px",

        margin: 0,
      }}
    >
      <img
        alt=""
        src={chest}
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
        onClick={openClink}
      ></img>

      <img
        src={back}
        alt=""
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
      ></img>

      <img
        alt=""
        src={bi}
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
      ></img>

      <img
        alt=""
        src={shoulder}
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
      ></img>

      <img
        src={tri}
        alt=""
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
      ></img>

      <img
        src={legs}
        alt=""
        width="200px"
        height="200px"
        style={{ marginRight: "10px" }}
      ></img>

      <footer>© 2021 hireAtrainer, Inc</footer>
    </div>
  );
};

export default Workout;
