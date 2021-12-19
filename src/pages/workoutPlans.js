import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import gym from "../images/gym1.jpg";
import dumbell from "../images/dumbelico.png";
import ReusableAccordion from "../reusableComponents/Accordion";

const Workout = () => {
  useEffect(() => {}, []);
  let history = useHistory();

  const imageClick = () => {
    let val = localStorage.getItem("email");
    console.log(val);

    if (val !== "key") {
      history.push("/HomeClient");
    } else {
      history.push("/Home");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${gym})`,
        height: "1000px",
        margin: 0,
      }}
      className="container-fluid"
    >
      <div
        className="text-center"
        style={{ width: "45%", marginLeft: "28%", marginBottom: "2%" }}
      >
        <img
          src={dumbell}
          width="100 px"
          height="100 px"
          className="d-inline-block align-text-top"
          alt=""
          onClick={imageClick}
        ></img>
      </div>
      <ReusableAccordion
        label1="push/pull"
        label2="upper/lower"
        label3="Regular split"
        body1="deadlifts and squats "
        body2="upper body  2 days ,  legs 2 days  "
        body3=" chest/triceps,back/biceps,shoulders,legs "
      ></ReusableAccordion>

      <footer>© 2021 hireAtrainer, Inc</footer>
    </div>
  );
};

export default Workout;
