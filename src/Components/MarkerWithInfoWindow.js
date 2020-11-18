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
					console.log(coords.name);
					console.log(coords.kilojoules);
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
							<p>
								{coords.name}
								<br />
								{Math.floor(coords.moving_time / 3600)}h{" "}
								{Math.floor((coords.moving_time / 60) % 60)}
								m
								<br />
								{(coords.distance / 1000).toFixed(2)}km
								<br />
								{coords.kilojoules !== undefined
									? `${coords.kilojoules} kcal`
									: "not found"}
								<br />
							</p>
						</div>
					</InfoWindow>
				)}
			</Marker>
		</div>
	);
};

export default MarkerWithInfoWindow;
