import { Link } from 'react-router-dom';

export default function TabGroup() {
    return (
        <>
            <ul class="nav">
                <li class="nav-item">
                    <Link to="/ominivore" className='nav-link'> Ominivore</Link>
                </li>
                <li class="nav-item">
                    <Link to="/carnivore" className='nav-link'> Carnivore</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </>
    );
}