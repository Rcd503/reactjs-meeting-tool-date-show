import {
  ADD_END_DATE,
  ADD_START_DATE,
  ADD_WEEK_DAYS,
  CHECKED_UPDATE,
} from "./actionType";

export const addStartDate = (data) => ({
  type: ADD_START_DATE,
  payload: data,
});
export const addEndDate = (data) => ({
  type: ADD_END_DATE,
  payload: data,
});
export const addWeekDays = (data) => ({
  type: ADD_WEEK_DAYS,
  payload: data,
});
export const addDateList = (data) => ({
  type: CHECKED_UPDATE,
  payload: data,
});
