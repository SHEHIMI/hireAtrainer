import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import dumbell from "../images/dumbelico.png";
import { retrieveData } from "../api/api";

const Visualize = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  let history = useHistory();

  const imageClick = () => {
    history.push("/HomeClient");
  };
  useEffect(() => {
    receiveData();
  });
  const receiveData = async () => {
    const data = await retrieveData();

    let d = data.data;

    console.log(d);

    setData1(d[0].bpm);
    setData2(d[1].bpm);
    setData3(d[2].bpm);
    setData4(d[3].bpm);

    console.log(data2);
  };

  return (
    <div
      className="container-fluid"
      style={{ height: "600px", width: "1000px" }}
    >
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
      <h1>Resting bpm vs working out days per week</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["1 day/week", "2 days/week", "3 days/week", "4 days/week"],
          datasets: [
            {
              id: 1,
              label: "Average Resting heart Rate per minute",
              data: [data1, data2, data3, data4],
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 1,
              fill: "start",
              responsive: "true",
              title: {
                text: "Resting bpm vs working out days per week",
                display: true,
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default Visualize;
