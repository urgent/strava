import React from "react";
import ActivityDetails from "./ActivityDetails";
import DropdownMenu from "./DropdownMenu";

function Section2() {
  return (
    <div className="">
      <div className="bg-gray-200 shadow-lg py-6 px-3">
        <div className="bg-gray-200 self-auto">
          <div className="bg-gray-200 self-auto flex-1 text-gray-800 text-center px-4 py-2 m-2">
            <DropdownMenu />
          </div>
          <div className="lg:flex items-stretch">
            <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
              *insert PolygonWrapper in this box (40-50% width)*
              <br />
              *or csv style table with selection*
            </div>
            <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
              <ActivityDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
