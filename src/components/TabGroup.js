import { Link } from 'react-router-dom';

export default function TabGroup() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <ul class="nav">
                    <li class="nav-item">
                        <Link to="/" className='nav-link one'> Ominivore</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/carnivore" className='nav-link'> Carnivore</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pollotarians" className='nav-link'> pollotarians</Link>
                    </li>
    
                    <li class="nav-item">
                        <Link to="/vegetarians" className='nav-link'> Vegetarians</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pescetarians" className='nav-link '> Pescetarians</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/vegans" className='nav-link'> Vegans</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/kosher" className='nav-link'> Kosher</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/halal" className='nav-link'> Halal</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}