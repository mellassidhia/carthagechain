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
        <Link to="/">Home</Link>
        
        {/* Elections Dropdown */}
        <div className="dropdown">
          <span className="dropdown-toggle">Elections</span>
          <div className="dropdown-content">
            <Link to="/ongoing-elections">Ongoing Elections</Link>
            <Link to="/past-elections">Past Elections</Link>
            <Link to="/election-results">Results</Link>
            <Link to="/voter-guide">Voter Guide</Link>
          </div>
        </div>
        {/* Candidates Dropdown */}
        <div className="dropdown">
          <span className="dropdown-toggle">Candidates</span>
          <div className="dropdown-content">
            <Link to="/ongoing-elections">All Candidates</Link>
            <Link to="/past-elections">Approved Candidates</Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="dropdown">
          <span className="dropdown-toggle">Resources</span>
          <div className="dropdown-content">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/security">Security</Link>
            <Link to="/policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Service</Link>
          </div>
        </div>
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