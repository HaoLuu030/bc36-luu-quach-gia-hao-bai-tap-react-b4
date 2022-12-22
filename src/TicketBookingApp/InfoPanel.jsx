import React, { Component } from "react";
import SelectedSeatTable from "./SelectedSeatTable";

export default class InfoPanel extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 d-flex justify-content-between">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light">Reserved</span>
          <button className="gheDangChon"></button>{" "}
          <span className="text-light">Selected</span>
          <button className="ghe mx-0"></button>{" "}
          <span className="text-light">Available</span>
        </div>
        <SelectedSeatTable />
      </div>
    );
  }
}
