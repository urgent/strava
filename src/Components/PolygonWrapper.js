import React, { Fragment } from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import PolygonComp from "./PolygonComp";

const PolygonWrapper = () => {
  const MapWrapped = withScriptjs(withGoogleMap(PolygonComp));

  return (
    <Fragment>
      <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDWRwuUXoIzFYTlZsSlpgnz7g2IJkDq7tE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Fragment>
  );
};
export default PolygonWrapper;
