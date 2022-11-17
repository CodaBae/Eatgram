import DaysList from "./DaysList";
import { useNavigate } from 'react-router-dom';

import "./DietCalendar.css";

export default function DietCalendar() {
  const navigate = useNavigate();

  return (
    <div className="DietCalendar-container">
      <table>
      <button className='btn back' onClick={() => navigate(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i> {""} Back to Home</button>

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
