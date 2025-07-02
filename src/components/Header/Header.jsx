import {Link} from 'react-router-dom'
import './Header.css'

const Header = () =>{

    return (
        <div>
    <div className="navbar">
      <div className="logo">Vivekanand College</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link className="apply-btn" to="/admission">Apply Now!</Link></li>
      </ul>
    </div>
        
        </div>
    )

}

export default Header;