import React from "react";
import { GoogleMap, Polygon } from "react-google-maps";
import { myBestCords } from "../Coordinates/coordinates";
import { myBestCords2 } from "../Coordinates/coordinates-2";
import mapStyles from "../mapStyles";

const PolygonComp = (props) => {
  return (
    <GoogleMap
      //defaultZoom={12.7}
      defaultZoom={9.7}
      //defaultCenter={{ lat: 49.32416, lng: 8.5679 }}
      defaultCenter={{ lat: 47.68684, lng: 7.67506 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Polygon
        paths={myBestCords2}
        strokeColor={"#000000"}
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor={"#FAFAFA"}
        fillOpacity={0.5}
      ></Polygon>
    </GoogleMap>
  );
};

export default PolygonComp;
