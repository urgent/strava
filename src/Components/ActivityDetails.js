import React, { useState, Image } from "react";
import { myData } from "../data/Strava-all-1-year.js";
import runIcon from "../images/run.png";
import bikeIcon from "../images/bike.png";

function ActivityDetails() {
  let uploadID = 3929400589; // TODO: make this selectable via Dropdown

  const [name, setName] = useState("Title");
  const [type, setType] = useState("Type");
  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");
  const [movingTimeH, setMovingTimeH] = useState("N/A");
  const [movingTimeM, setMovingTimeM] = useState("N/A");
  const [movingTimeS, setMovingTimeS] = useState("N/A");
  const [distance, setDistance] = useState("N/A");
  const [calories, setCalories] = useState("N/A");
  const [maxHeartRate, setMaxHeartRate] = useState("N/A");
  const [avgHeartRate, setAvgHeartRate] = useState("N/A");
  const [maxSpeed, setMaxSpeed] = useState("N/A");
  const [avgSpeed, setAvgSpeed] = useState("N/A");

  const setObjectHandler = (myObject) => {
    if (myObject[0]) {
      if (name === "Title") {
        setName(myObject[0].name);
      }

      if (type === "Type") {
        setType(myObject[0].type);
        if (myObject[0].type === "Ride") {
          function typeSelect() {
            return (
              <img
                src={bikeIcon}
                height={30}
                width={30}
                style={{ margin: "0 auto" }}
              />
            );
          }
        } else if (myObject[0].type === "Run") {
          //icon of runner
          function typeSelect() {
            return (
              <img
                src={runIcon}
                height={30}
                width={30}
                style={{ margin: "0 auto" }}
              />
            );
          }
        }
      }

      if (date === "Date") {
        let dateCutString = myObject[0].start_date_local.slice(0, 10);
        setDate(dateCutString);
      }

      if (time === "Time") {
        let timeCutString = myObject[0].start_date_local.slice(11, 16);
        setTime(timeCutString);
      }

      if (movingTimeH === "N/A") {
        let seconds = myObject[0].moving_time;
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        setMovingTimeH(hours);
      }

      if (movingTimeM === "N/A") {
        let seconds = myObject[0].moving_time;
        let minutes = Math.floor(seconds / 60);
        minutes = minutes % 60;
        setMovingTimeM(minutes);
      }

      if (movingTimeS === "N/A") {
        let seconds = myObject[0].moving_time % 60;
        seconds = seconds % 60;
        setMovingTimeS(seconds);
      }

      if (distance === "N/A") {
        let m = myObject[0].distance;
        let km = (m / 1000).toFixed(2);
        setDistance(km);
      }

      if (calories === "N/A") {
        setCalories(Math.round(myObject[0].kilojoules));
      }

      if (avgHeartRate === "N/A") {
        setAvgHeartRate(Math.round(myObject[0].average_heartrate));
      }

      if (maxHeartRate === "N/A") {
        setMaxHeartRate(myObject[0].max_heartrate);
      }

      if (avgSpeed === "N/A") {
        let ms = myObject[0].average_speed;
        let kmh = (ms * 3.6).toFixed(1);
        setAvgSpeed(kmh);
      }

      if (maxSpeed === "N/A") {
        let ms = myObject[0].max_speed;
        let kmh = (ms * 3.6).toFixed(1);
        setMaxSpeed(kmh);
      }
    }
  };

  const mainObject = myData.filter((object) => object.upload_id == uploadID);
  setObjectHandler(mainObject);

  return (
    <div className="text-center">
      <div className="text-2xl">{name}</div>
      <div className="text-m">
        {type}
        <img
          src={runIcon}
          height={30}
          width={30}
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className="text-sm text-gray-700">
        {date} at {time} o'clock
      </div>
      <div className="lg:flex items-stretch">
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {movingTimeH}
            <a className="text-sm text-gray-700">h</a> {movingTimeM}
            <a className="text-sm text-gray-700">m</a> {movingTimeS}
            <a className="text-sm text-gray-700">s</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Moving time</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {distance}
            <a className="text-sm text-gray-700">km</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Distance</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {calories}
            <a className="text-sm text-gray-700">kcal</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Calories</div>
        </div>
      </div>
      <div className="lg:flex items-stretch">
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {avgHeartRate}
            <a className="text-sm text-gray-700">bpm</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Avg. heartrate</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {maxHeartRate}
            <a className="text-sm text-gray-700">bpm</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Max heartrate</div>
        </div>
      </div>
      <div className="lg:flex items-stretch">
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {avgSpeed}
            <a className="text-sm text-gray-700">km/h</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Avg. speed</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {maxSpeed}
            <a className="text-sm text-gray-700">km/h</a>
            <br />
          </div>
          <div className="text-sm text-gray-700">Max speed</div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;
