import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

function ResultShow() {
  const { weeksDays } = useSelector((state) => state.meetingToolReducer);
  const [data, setdata] = useState([]);
  const [total, setTotal] = useState();
  useEffect(() => {
    let arr = weeksDays.filter((item) => {
      console.log(item.checked);
      return item.checked;
    });
    console.log("arrr====>---", arr);
    setdata([...arr]);
  }, [weeksDays]);
  useEffect(() => {
    if (data) {
      const initialValue = 0;
      const sumWithInitial = data.reduce(
        (previousValue, currentValue) =>
        
          previousValue + currentValue.date.length,
        initialValue
      );
      setTotal(sumWithInitial);
      console.log("sumWithInitial", sumWithInitial);
    }
  }, [data]);
  return (
    <div>
      <h2>Meeting Scheduled Data</h2>
      <h4>{!total ? null : `Total meeting held days :${total}`}</h4>
      {data?.map((item) => {
        return (
          <div key={item.date}>
            Meetind held date:
            {item.date?.map((element) => {
              return <label className={styles.labelday}>{element}</label>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ResultShow;
