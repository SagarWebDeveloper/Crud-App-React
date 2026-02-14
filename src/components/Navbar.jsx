import { Link, NavLink } from "react-router-dom";
import brand from '../assets/logomy1.png'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3 shadow">
      <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={brand} alt="logo" style={{width: "50px",height: "50px",objectFit:"contain"}}/>
            <span className="fw-bold fs-2">StudentApp</span>
          </NavLink>
        <div className="d-flex gap-3 text-white fs-4">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/view">View</NavLink>
          <NavLink className="nav-link" to="/update">Update</NavLink>
          <NavLink className="nav-link" to="/delete">Delete</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
