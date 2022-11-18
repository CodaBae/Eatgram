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
                            className='nav-link'> <i class="fa-solid fa-pot-food"></i> Omnivore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/carnivore"
                            className='nav-link'> <i class="fa-solid fa-meat"></i>   Carnivore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pollotarians"
                            className='nav-link'><i class="fa-solid fa-turkey"></i> Pollotarian</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/vegetarians"
                            className='nav-link'><i class="fa-solid fa-salad"></i> Vegetarian</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pescetarians"
                            className='nav-link '><i class="fa-solid fa-fish"></i> Pescetarian</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/vegan"
                            className='nav-link'><i class="fa-solid fa-seedling"></i> Vegan</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kosher"
                            className='nav-link'><i class="fa-solid fa-shish-kebab"></i>  Kosher</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/halal"
                            className='nav-link'><i class="fa-solid fa-pot-food"></i> Halal</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}