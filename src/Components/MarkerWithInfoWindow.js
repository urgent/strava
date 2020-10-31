import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import mySvg from "./../images/placeholder.svg";
import "./MarkerWithInfoWindow.css";

const MarkerWithInfoWindow = (props) => {
  const { coords, setMyZoom, setMyLng, setMyLat } = props;
  const [infoWindowInfo, setInfoWindowInfo] = useState(false);

  const changeZoomHandler = (zoomNo) => {
    setMyZoom(zoomNo);
  };

  const changeLngHandler = (lng) => {
    setMyLng(lng);
  };

  const changeLatHandler = (lat) => {
    setMyLat(lat);
  };

  const infoWindowInfoHandler = (state) => {
    setInfoWindowInfo(!state);
  };
  return (
    <div class="mapMarker">
      <Marker
        key={coords.id}
        onClick={() => {
          changeLngHandler(coords.start_longitude);
          changeLatHandler(coords.start_latitude);
          changeZoomHandler(15);
          infoWindowInfoHandler(infoWindowInfo);
          console.log("Clicked Motherfucker");
        }}
        position={{
          lat: parseFloat(coords.start_latitude),
          lng: parseFloat(coords.start_longitude),
        }}
        icon={mySvg}
      >
        {infoWindowInfo && (
          <InfoWindow>
            <div>
              <p>Hello {coords.id}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </div>
  );
};

export default MarkerWithInfoWindow;
