import React from "react";
import "./Day.css";

export default function Day(props) {
  return (
    <tr class="Day-row-container">
      <td class="Day-number">DAY {props.day}</td>
      <td class="Day-meal">High-Fibre Breakfast Cereal</td>
      <td class="Day-meal">Fresh Summer Chickpea Salad</td>
      <td class="Day-meal">Barley & Vegetable Soup</td>
    </tr>
  );
}
