import { Link } from 'react-router-dom';
import './Navbar.css';
import {assets} from '../../assets/assets'
const Navbar = () => {

  return (
    <nav className="navbar">
      {/* Logo and brand name */}
      <div className="navbar-brand">
        <div className="logo-container">
          <img src={assets.logo} alt="Logo" className="logo-image" />
        </div>
        <span className="brand-name">CarthageChain</span>
      </div>
      
      {/* Center navigation links */}
      <div className="nav-links">
        <Link to="/" className="">Home</Link>
        <Link to="/elections">Elections</Link>
        <Link to="/resources">Resources</Link>
        
      </div>
      
      {/* Right side buttons */}
      <div className="nav-actions">
       
          <>
            <Link to="/login" className="voter-link">
              Voter
            </Link>
            <Link to="/login" className="candidate-button">
              Become Candidate
            </Link>
          </>
      </div>
    </nav>
  );
};

export default Navbar;