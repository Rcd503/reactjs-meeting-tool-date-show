import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDateList } from "../../redux/action/action";
import styles from "./style.module.css";

const DaySelector = () => {
  const { weeksDays } = useSelector((state) => state.meetingToolReducer);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata([...weeksDays]);
  }, [weeksDays]);

  const dispatch = useDispatch();
  const checkboxClickHandle = (date, checked) => {
    dispatch(addDateList({ date, checked }));
  };
  return (
    <div>
      <h2>Select Day</h2>
      {data?.map((item) => {
        return (
          <div key={item.day}>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              checked={item.checked}
              value={item.day}
              disabled={!item.disable}
              onChange={() => checkboxClickHandle(item.date, item.checked)}
            />
            <label className={styles.labelday}>{item.day}</label>
          </div>
        );
      })}
    </div>
  );
};

export default DaySelector;
