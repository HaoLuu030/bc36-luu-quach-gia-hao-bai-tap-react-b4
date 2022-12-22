import { ADD_SEAT, REMOVE_SEAT } from "../types/seatType";

export const addSeatAction = (payload) => {
  return {
    type: ADD_SEAT,
    payload,
  };
};

export const removeSeatAction = (payload) => {
  return {
    type: REMOVE_SEAT,
    payload,
  };
};
