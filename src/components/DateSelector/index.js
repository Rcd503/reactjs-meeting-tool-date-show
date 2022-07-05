import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addEndDate,
  addStartDate,
  addWeekDays,
} from "../../redux/action/action";
import styles from "./style.module.css";

const DateSelector = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState({ date1: "", date2: "" });
  const [date1, setData1] = useState("");
  const [date2, setData2] = useState("");

  useEffect(() => {
    // this hook will get called everytime when myArr has changed
    // perform some action which will get fired everytime when myArr gets updated
    console.log("Updated State", date1 + date2);
  }, [date1]);
  useEffect(() => {
    // this hook will get called everytime when myArr has changed
    // perform some action which will get fired everytime when myArr gets updated
    console.log("Updated State", date1 + date2);
    if (date2) {
      validateDate();
    }
  }, [date2]);
  //value assign for all textinput
  const inputHandel = (e) => {
    console.log("eeeeeeeee", e.target.value);

    // await setData({ ...data, [e.target.name]: e.target.value });
    setData1(e.target.value);
    console.log("date1  settttttt111", date1);

    // if (e.target.name === "date2") {
    //   validateDate(e.target.value);
    // }
  };
  const inputHandel2 = async (e) => {
    // await setData({ ...data, date2: e.target.value });
    console.log("eeeeeeeee", e.target.value);
    await setData2(e.target.value);
    console.log("date2  settttttt", date2);
    // if (e.target.name === "date2") {
    // validateDate(e.target.value);
    // }
  };

  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate1 = moment(stopDate);
    while (currentDate <= stopDate1) {
      dateArray.push(moment(currentDate).format("LLLL"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  }

  //date validate function
  const validateDate = () => {
    // console.log("date2222222",date22)
    if (date1 === "") {
      alert("please select start date...");
    } else if (date2 === "") {
      alert("please select end date...");
    } else if (date1 > date2) {
      alert("invalid date....");
    } else {
      let datesAll = getDates(date1, date2);
      const weekDay = datesAll.map((item) => {
        let days = moment(item).format("dddd");
        let date = moment(item).format("L");

        let dayObj = { day: days, date: date };
        return dayObj;
      });
      // console.log("week days ", weekDay);
      const days1 = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ].map((item) => {
        // let obj = weekDay.find((o) => o.day === item);
        let arrDayObj = weekDay.filter((obj) => item === obj.day);
        // {
        //   if(item ===obj.day){
        //     console.log("dates arrr all in da===>>>",obj)
        //     return obj
        //   }
        // })
        console.log("obj", arrDayObj);
        if (arrDayObj.length) {
          let arrDayObj2 = arrDayObj.map((obj) => {
            return obj.date;
          });
          return {
            day: item,
            date: arrDayObj2,
            disable: true,
            checked: false,
          };
        } else {
          return { day: item, date: [], disable: false, checked: false };
        }
      });
      console.log("days====> ", days1);
      dispatch(addWeekDays(days1));
      dispatch(addStartDate(date1));
      dispatch(addEndDate(date2));
    }
  };

  return (
    <div className={styles.divStyle}>
      <label className={styles.styleLabel1}> Select Start Date </label>
      <br />
      <input
        type="date"
        id="birthday"
        name="date1"
        value={date1}
        onChange={inputHandel}
      />
      <br />
      <label className={styles.styleLabel1}> Select End Date </label>
      <br />
      <input type="date" name="date2" value={date2} onChange={inputHandel2} />
      <br />
      {/* <div className={styles.submitButtonDiv}>
        <input
          type="submit"
          onClick={validateDate}
          className={styles.submitButton}
        />
      </div> */}
    </div>
  );
};

export default DateSelector;
