import { NavLink } from 'react-router-dom';

export default function TabGroup() {

    let active = {
        background: 'transparent',
        border: "2px solid #249644"
    }
    return (
        <div className='container-fluid mb-5'>
            <div className='row'>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/"
                            className='nav-link'> <i class="fa fa-car"></i> Ominivore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/carnivore"
                            className='nav-link'>  Carnivore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pollotarians"
                            className='nav-link'> pollotarians</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/vegetarians"
                            className='nav-link'> Vegetarians</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pescetarians"
                            className='nav-link '> Pescetarians</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/vegan"
                            className='nav-link'> Vegans</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kosher"
                            className='nav-link'> Kosher</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/halal"
                            className='nav-link'> Halal</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}