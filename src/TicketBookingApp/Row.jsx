import React, { Component } from "react";
import Seat from "./Seat";
export default class Row extends Component {
  renderRow = () => {
    const { hang, danhSachGhe } = this.props.row;
    if (hang) {
      return danhSachGhe.map((element) => {
        return <Seat seat={element} key={element.soGhe} />;
      });
    } else {
      return danhSachGhe.map((element) => {
        return (
          <div className="col-1" key={element.soGhe}>
            <div className="rowNumber my-4">{element.soGhe}</div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderRow()}</div>
      </div>
    );
  }
}
