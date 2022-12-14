import DaysList from "./DaysList";
import "../../App.css";
import { useNavigate, Link} from 'react-router-dom';

import "./DietCalendar.css";

export default function DietCalendar() {
  const navigate = useNavigate();

  return (
    <div className="DietCalendar-container">
            <div className="SBC">
            <button className='btn back' onClick={() => navigate(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i> {""} Back to Home</button>
            <Link to='/watch'>
            <button className='btn upload'>Watch</button>
            </Link>
            </div>

      <table>
        <tr>
          <th></th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
        </tr>
        {/*<tr className="DietCalendar-banner">
          <td className="DietCalendar-banner-item">Day</td>
      <button className='btn back' onClick={() => navigate(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i> {""} Back to Home</button>

        <tr className="DietCalendar-banner">
          <td className="DietCalendar-banner-item">Breakfast</td>
          <td className="DietCalendar-banner-item">Lunch</td>
          <td className="DietCalendar-banner-item">Dinner</td>
          </tr>*/}
        <DaysList />
      </table>
    </div>
  );
}
