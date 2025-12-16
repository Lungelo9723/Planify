import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Login() {
  const { registeredUser, currentUser, login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login({ username, password });

    if (!success) {
      setError("Incorrect username or password");
    }
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <NavBar />
      <h2>Login</h2>

      {!registeredUser && <p>Please register before logging in.</p>}

      {registeredUser && !currentUser && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}

      {currentUser && <p>Logged in as {currentUser.name}</p>}
    </div>
  );
}
