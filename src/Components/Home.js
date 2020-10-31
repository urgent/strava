import React from "react";

function Header() {
  var polyline = require("@mapbox/polyline");
  polyline.decode("_p~iF~ps|U_ulLnnqC_mqNvxq`@");

  return (
    <div className="">
      <div className="bg-gray-200 shadow-lg py-6 px-3">
        <div className="bg-gray-200 self-auto">
          <div className="bg-gray-200 self-auto flex-1 text-gray-800 text-center px-4 py-2 m-2">
            Your latest activities:
          </div>
          <div className="lg:flex items-stretch">
            <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
              Test 1
            </div>
            <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
              Test 2
            </div>
            <div className="rounded-md shadow-md flex-1 text-gray-700 text-center px-4 py-6 my-8 lg:m-2 bg-gray-400">
              Test 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
