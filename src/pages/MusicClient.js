import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import dumbell from "../images/dumbelico.png";
import music from "../images/music.jpg";

const MusicClient = () => {
  let history = useHistory();
  const imageClick = () => {
    history.push("/HomeClient");
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${music})`,
        width: "100%",
        height: "1000px",
        margin: 0,
      }}
    >
      <div>
        <div>
          <img
            src={dumbell}
            width="100 px"
            height="100 px"
            className="d-inline-block align-text-top"
            alt=""
            onClick={imageClick}
            style={{ marginBottom: "25px" }}
          ></img>
        </div>
        <div>
          <a href="https://play.anghami.com/tag/3">
            <button
              type="button"
              className="btn btn-lg"
              style={{ backgroundColor: "purple" }}
            >
              Workout music on anghami
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MusicClient;
