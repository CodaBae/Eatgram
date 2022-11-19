import React from "react";
import "./Day.css";

export default function Day({dayMeal}) {
  console.log(dayMeal)
  return (
    <tr class="Day-row-container">
      <td class="Day-number">DAY {dayMeal.day}</td>
      <td class="Day-meal">{dayMeal.meals[0]}</td>
      <td class="Day-meal">{dayMeal.meals[1]}</td>
      <td class="Day-meal">{dayMeal.meals[2]}</td>
    </tr>
  );
}
