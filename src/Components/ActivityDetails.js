import React from "react";
import { myData } from "../data/Strava-all-1-year.js";

function ActivityDetails() {
  let uploadID = 4266713329; // TODO: make this selectable via Dropdown

  myData.map((allStravaData) => {
    if (allStravaData.upload_id == uploadID) {
      let name = allStravaData.name;
      console.log(name);

      let moving_time = allStravaData.moving_time;
      console.log(moving_time);

      let distance = allStravaData.distance;
      console.log(distance);

      let max_heartrate = allStravaData.max_heartrate;
      console.log(max_heartrate);

      let average_heartrate = allStravaData.average_heartrate;
      console.log(average_heartrate);
    }
  });

  return (
    <div className="text-center">
      <div className="text-2xl">{}*Activity name*</div>
      <div className="lg:flex items-stretch">
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {}XXX s<br />
          </div>
          <div className="text-sm">Moving time</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {}XXX m <br />
          </div>
          <div className="text-sm">Distance</div>
        </div>
      </div>
      <div className="lg:flex items-stretch">
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {}XXX s<br />
          </div>
          <div className="text-sm">Max heartrate</div>
        </div>
        <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
          <div className="text-2xl">
            {}XXX m <br />
          </div>
          <div className="text-sm">Avg. heartrate</div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;
