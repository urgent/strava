import React from "react";
import ActivityDetails from "./ActivityDetails";
import DropdownMenu from "./DropdownMenu";

function Section0() {

  return (
    <div className="">
      <div className="bg-gray-200 shadow-lg py-3 px-3">
        <div className="bg-gray-200 self-auto">
          <div className="bg-gray-200 self-auto flex-1 text-gray-800 text-center px-4 py-2 m-2">
            <DropdownMenu />
            <br />
            <ActivityDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section0;
