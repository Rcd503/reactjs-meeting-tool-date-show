import {
  ADD_TO_CART_ARR,
  REMOVE_TO_CART,
  ADD_START_DATE,
  ADD_END_DATE,
  ADD_WEEK_DAYS,
  CHECKED_UPDATE,
} from "../action/actionType";

export const initialState = {
  startDate: "",
  endDate: "",
  error: null,
  weeksDays: [],
};

const meetingToolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case ADD_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case ADD_WEEK_DAYS:
      return { ...state, weeksDays: [...action.payload] };
    case CHECKED_UPDATE:
      return {
        ...state,
        weeksDays: state.weeksDays.map((item) => {
          return item.date === action.payload.date
            ? { ...item, checked: !action.payload.checked }
            : item;
        }),
      };
    default:
      return state;
  }
};

export default meetingToolReducer;
