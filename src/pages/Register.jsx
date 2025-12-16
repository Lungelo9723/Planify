import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Register() {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setError("All fields are required");
      return;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    register({ name, username, email, password });
    setSuccess(true);
    setError("");
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <NavBar />
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>

      {success && (
        <p>Registration successful. You may now log in.</p>
      )}
    </div>
  );
}
