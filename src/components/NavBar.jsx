import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function NavBar() {
  const { registeredUser, currentUser, logout } =
    useContext(AuthContext);

  return (
    <header style={{ position: "fixed", top: 0, width: "100%" }}>
      <nav style={{ display: "flex", gap: "16px" }} >
        <Link to="/">Dashboard</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/help">Help</Link>

        {!registeredUser && (
          <Link to="/register">Register</Link>
        )}

        {registeredUser && !currentUser && (
          <Link to="/login">Login</Link>
        )}

        {currentUser && (
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
