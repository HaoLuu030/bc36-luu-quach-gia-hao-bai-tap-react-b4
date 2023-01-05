import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSeatAction } from "../store/actions/seatAction";

class SelectedSeatTable extends Component {
  removeSeat = (seat) => {
    this.props.dispatch(removeSeatAction(seat));
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
    const totalPrice = this.props.selectedSeats.reduce((total, element) => {
      total += element.gia;
      return total;
    }, 0);
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
          <tbody>
            {this.renderSelectedSeats()}
            <tr>
              <td>Total</td>
              <td colSpan={2}>{totalPrice}</td>
            </tr>
          </tbody>
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
