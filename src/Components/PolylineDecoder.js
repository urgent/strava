import React from "react";
// import * as parkData from "./data/skateboard-parks.json";
import { myData } from "../data/Strava-all-1-year.js";

function PolylineDecoder() {
  let uploadID = 4266713329; // TODO: make this selectable somewhere

  myData.map((allStravaData) => {
    if (allStravaData.upload_id == uploadID) {
      console.log(allStravaData.map.summary_polyline);
      var polyline = require("@mapbox/polyline");
      let activityLatLng = polyline.decode(allStravaData.map.summary_polyline);
      console.log(activityLatLng);
    }
  });

  return <div></div>;
}

export default PolylineDecoder;
