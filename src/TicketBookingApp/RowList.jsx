import React, { Component } from "react";
import data from "../data/danhSachGhe.json";
import Row from "./Row";

export default class RowList extends Component {
  renderRows = () => {
    return data.map((element) => {
      return (
        <div className="row align-items-center" key={element.hang}>
          <div className="col-1">
            <div className="firstChar">{element.hang}</div>
          </div>
          <div className="col-10">
            <Row row={element} />
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderRows()}</div>;
  }
}
