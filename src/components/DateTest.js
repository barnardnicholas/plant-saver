import React from "react";
import { timeValues } from "../data/utils";

export default function DateTest(props) {
  console.dir(props.date);
  const yesterday = new Date(props.date.getTime() - timeValues.day);
  const aWeekAgo = new Date(props.date.getTime() - timeValues.week);
  return (
    <div>
      <p>props.date toString: {props.date.toString()}</p>
      <p>yesterday: {yesterday.toString()}</p>
      <p>a week ago: {aWeekAgo.toString()}</p>
      <p>props.date toLocaleString: {props.date.toLocaleString()}</p>
      <p>props.date type: {typeof props.date}</p>
      <p>props.date year: {props.date.getYear()}</p>
      <p>props.date month: {props.date.getMonth()}</p>
      <p>props.date hours: {props.date.getHours()}</p>
      <p>props.date minutes: {props.date.getMinutes()}</p>
      <p>props.date time: {props.date.getTime()}</p>
      <p>props.date timezoneOffset: {props.date.getTimezoneOffset()}</p>
    </div>
  );
}
