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
                </ul>
            </div>
        </div>
    );
}