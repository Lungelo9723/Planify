import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Login() {
  const { currentUser, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (currentUser) {
    navigate("/", { replace: true });
  };

  const successMessage = location.state?.message;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    const success = login({ username, password });

    if (!success) {
      setError("Incorrect username or password");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>

            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Button type="submit">Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
