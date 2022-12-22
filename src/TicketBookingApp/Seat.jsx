import React, { Component } from "react";
import { connect } from "react-redux";

class Seat extends Component {
  mappingClass = (seat) => {
    const isReserved = seat.daDat;
    if (isReserved) {
      return "gheDuocChon";
    }
    const idx = this.props.selectedSeats.findIndex(
      (element) => element.soGhe === seat.soGhe
    );
    if (idx !== -1) {
      return "gheDangChon";
    }
    return "ghe";
  };
  addSeat = (seat) => {
    this.props.dispatch({
      type: "ADD_SEAT",
      payload: seat,
    });
  };
  render() {
    const { soGhe, daDat } = this.props.seat;
    return (
      <div className="col-1" key={soGhe}>
        <button
          disabled={daDat ? true : false}
          onClick={() => {
            this.addSeat(this.props.seat);
          }}
          className={this.mappingClass(this.props.seat)}
        >
          {soGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.seatReducer.selectedSeats,
  };
};

export default connect(mapStateToProps)(Seat);
