import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as runGeo from "./data/latLongData_activity1.json";

function Map() {
  return (
    <GoogleMap
      defaultZoom={12.7}
      defaultCenter={{ lat: 49.32416, lng: 8.5679 }}
    >
      {runGeo.coordinates.map(coords => (
        <Marker
          key={coords.id}
          position={{
            lat: coords.latitude,
            lng: coords.longitude
          }}
        />
      ))}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default Map;