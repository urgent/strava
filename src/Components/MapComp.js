import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "../mapStyles";
import * as runGeo from "../data/latLongData_activity1.json";
import { myData } from "../data/Strava-all-1-year.js";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow";
const MapComp = (props) => {
  const [myLat, setMyLat] = useState(48.32416);
  const [myLng, setMyLng] = useState(10.9679);
  const [myZoom, setMyZoom] = useState(4);
  // const [clicked, setClicked] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <GoogleMap
      zoom={myZoom}
      center={{ lat: myLat, lng: myLng }}
      defaultOptions={{ styles: mapStyles }}
    >
      {myData.map((coords) => (
        <MarkerWithInfoWindow coords={coords} setMyLat={setMyLat} setMyLng={setMyLng} setMyZoom={setMyZoom} />
      ))}

    </GoogleMap>
  );
};

export default MapComp;
