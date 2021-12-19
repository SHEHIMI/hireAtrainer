/**
 *
 * This was supposed to be a fitness news api but i was blocked from NewsAPi for making many requests
 * so  i found a jokes api and used it
 */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import dumbell from "../images/dumbelico.png";
import city from "../images/city.jpg";
const ExtAPI = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  let history = useHistory();
  const imageClick = () => {
    history.push("/Home");
  };

  useEffect(() => {
    fetchNews();
  }, [search]);

  const url = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,explicit&type=single&contains=${search}`;

  const fetchNews = async () => {
    let response = await fetch(url, {
      method: "GET",
    });
    const Data = await response.json();
    setData(Data.joke);
    console.log(Data);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${city})`,
        width: "100%",
        height: "1000px",
        margin: 0,
      }}
    >
      <div className="container">
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
        <form className="d-flex" style={{ marginBottom: "25px" }}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            onClick={fetchNews}
            className="btn btn-outline-success"
            type="submit"
          >
            Search for joke
          </button>
        </form>

        <div
          class="badge bg text-wrap"
          style={{ width: "100%", color: "aquamarine" }}
        >
          <p style={{ fontFamily: "cursive fantasy", fontSize: "50px" }}>
            {data}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtAPI;
