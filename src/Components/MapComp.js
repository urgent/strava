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

const MapComp = (props) => {
  const [myLat, setMyLat] = useState(48.32416);
  const [myLng, setMyLng] = useState(10.9679);
  const [myZoom, setMyZoom] = useState(4);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const changeZoomHandler = (zoomNo) => {
    setMyZoom(zoomNo);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedActivity(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      zoom={myZoom}
      center={{ lat: myLat, lng: myLng }}
      defaultOptions={{ styles: mapStyles }}
    >
      {myData.map((coords) => (
        <Marker
          key={coords.id}
          onClick={() => {
            console.log(coords.start_latitude);
            // setMyLat(12);
            // setMyLng(12);
            console.log(myZoom);
            changeZoomHandler(10);
            console.log(myZoom);
            //setSelectedActivity(coords);
          }}
          position={{
            lat: coords.start_latitude,
            lng: coords.start_longitude,
          }}
          // icon={{
          //   url: "../images/blast.svg",
          //   scaledSize: new window.google.maps.Size(25, 25),
          // }}
        />
      ))}

      {setSelectedActivity && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedActivity(null);
          }}
          position={{
            lat: selectedActivity.start_latitude,
            lng: selectedActivity.start_longitude,
          }}
        >
          <div>
            <h2>{selectedActivity.name}</h2>
            <p>{selectedActivity.moving_time}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapComp;
