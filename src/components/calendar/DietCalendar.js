import DaysList from "./DaysList";
import "../../App.css";
import "./DietCalendar.css";

export default function DietCalendar() {
  return (
    <div className="DietCalendar-container">
      <table>
        <tr>
          <th></th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
        </tr>
        {/*<tr className="DietCalendar-banner">
          <td className="DietCalendar-banner-item">Day</td>
          <td className="DietCalendar-banner-item">Breakfast</td>
          <td className="DietCalendar-banner-item">Lunch</td>
          <td className="DietCalendar-banner-item">Dinner</td>
          </tr>*/}
        <DaysList />
      </table>
    </div>
  );
}
