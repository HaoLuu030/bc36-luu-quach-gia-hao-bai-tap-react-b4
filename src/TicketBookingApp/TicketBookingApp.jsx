import React, { Component } from "react";
import "./TicketBookingApp.css";
import InfoPanel from "./InfoPanel";
import RowList from "./RowList";

export default class TicketBookingApp extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          //this refes to html directory
          backgroundImage: "url('./background/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            overflowY: "scroll",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-left">
                <h1 className="text-light text-center">Ticket Booking Application</h1>
                <div className="mt-5 text-light text-center" style={{ fontSize: 20 }}>
                  Screen this way
                </div>
                {/* the div tag takes its parent's full width by default */}
                <div className="d-flex justify-content-center mt-1">
                  <div className="screen"></div>
                </div>
                <RowList />
              </div>
              <div className="col-4 text-left">
                <h1 style={{ fontSize: 30 }} className="mt-2 text-light">
                  Your ticket
                </h1>
                <InfoPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
