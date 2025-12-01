// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { getAuth, clearAuth } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getAuth();

  const logout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-4">
      <Link className="navbar-brand text-white" to="/">PalmNest Hotel</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">Rooms</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link" to="/reservations">Reservations</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link" to="/reserve">Book Room</Link>
          </li>

          {user ? (
            <>
             
              <li className="nav-item mx-2">
                <button className="btn btn-sm btn-outline-light" onClick={logout}>Logout</button>
              </li>
            </>
          ) 
          : (
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
