import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slice/authSlice";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Hotel App</Link>

      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Rooms</Link>
        <Link className="nav-link" to="/reservations">Reservations</Link>

        {user ? (
          <button
            className="btn btn-danger ms-3"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        ) : (
          <Link className="btn btn-success ms-3" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
