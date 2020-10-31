import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "../mapStyles";
import * as runGeo from "../data/latLongData_activity1.json";
import * as allData from "../data/Strava-all-1-year.json";

const MapComp = (props) => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 48.32416, lng: 10.9679 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {runGeo.coordinates.map((coords) => (
        <Marker
          key={coords.id}
          position={{
            lat: coords.latitude,
            lng: coords.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComp;
