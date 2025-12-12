import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#f8f9fa",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        zIndex: 1000,
        display: "flex",
        gap: "1rem",
      }}
    >
    
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/help">Help</Link>
      </nav>
  );
}
