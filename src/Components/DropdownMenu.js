import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: Fill Dropdown.Menu with all "name" (i.e. all activity names) from Strava-all-1-year.js

export default function DropdownMenu() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select an activity
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Activity Name #1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Activity Name #2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Activity Name #3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
