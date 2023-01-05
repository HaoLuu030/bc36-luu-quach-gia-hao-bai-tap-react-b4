import { ADD_SEAT, REMOVE_SEAT } from "../types/seatType";
const DEFAULT_STATE = {
  selectedSeats: [],
};

export const seatReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SEAT: {
      const data = [...state.selectedSeats];
      const idx = data.findIndex((element) => element.soGhe === payload.soGhe);
      if (idx === -1) {
        data.push({ ...payload, daChon: true });
      } else {
        data.splice(idx, 1);
      }
      state.selectedSeats = data;
      break;
    }
    case REMOVE_SEAT: {
      const data = [...state.selectedSeats];
      const idx = data.findIndex((element) => element.soGhe === payload.soGhe);
      data.splice(idx, 1);
      state.selectedSeats = data;
      break;
    }
    default:
      break;
  }
  return { ...state };
};
