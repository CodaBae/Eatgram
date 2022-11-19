import React from "react";
import Day from "./Day";

export default function DaysList(props) {
const dayMeal = [{day:1, meals:["Spinach Salad","Omelette","Fish Stock "]},{day:2, meals:["Chicken Wings", "Steaky Nuggets","Pot Steak Soup"]},{day:3, meals:["Apple Cinnamon Muffin","Shepards Pie","Taco with Chorizo"]},{day:4, meals:["Sweet Cheese Blintzes","Honey Braised Chicken","Roast Chickpea" ]},{day:5, meals:["Oatmeal with Banana","Turkey & White Bean ","Baked Avocado Eggs"]},{day:6, meals:["Cheese Omelette","Three-Bean Pasta Salad","Meatballs"]},{day:7, meals:["coconut yogurt","ground flax seeds","Mug tea/coffee"]}]
  let days = dayMeal.map((day) => (
    <Day dayMeal={day} />
  ));
  return days;
}
