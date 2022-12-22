import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedSeatTable extends Component {
  removeSeat = (seat) => {
    this.props.dispatch({
      type: "REMOVE_SEAT",
      payload: seat,
    });
  };
  renderSelectedSeats = () => {
    return this.props.selectedSeats.map((element) => {
      return (
        <tr key={element.soGhe}>
          <td>{element.soGhe}</td>
          <td>{element.gia}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.removeSeat(element);
              }}
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="mt-5">
        <table className="table text-light" border={2} style={{ fontSize: 15 }}>
          <thead>
            <tr>
              <th>Seat no</th>
              <th>Price</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>{this.renderSelectedSeats()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.seatReducer.selectedSeats,
  };
};
export default connect(mapStateToProps)(SelectedSeatTable);
