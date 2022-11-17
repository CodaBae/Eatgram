import DaysList from "./DaysList";
import "./DietCalendar.css";

export default function DietCalendar() {
  return (
    <div className="DietCalendar-container">
      <table>
        <tr className="DietCalendar-banner">
          <td className="DietCalendar-banner-item">Breakfast</td>
          <td className="DietCalendar-banner-item">Lunch</td>
          <td className="DietCalendar-banner-item">Dinner</td>
        </tr>
        <DaysList />
      </table>
    </div>
  );
}
