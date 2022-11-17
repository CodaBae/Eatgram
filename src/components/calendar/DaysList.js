import React from "react";
import Day from "./Day";

export default function DaysList(props) {
  let days = [1, 2, 3, 4, 5, 6, 7].map((day) => (
    <Day day={day} meals={props.meals} />
  ));
  return days;
}
