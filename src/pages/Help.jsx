import { Container, Card, ListGroup } from "react-bootstrap";
import NavBar from "../components/NavBar";

export default function Help() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Help & Instructions</Card.Title>
            <Card.Text>
              Welcome to Event Planner! Here’s how to get started:
            </Card.Text>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Register:</strong> Create an account by providing your name, username, email, and password. All fields are required.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Login:</strong> Use your username and password to log in. You must register first before logging in.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Dashboard:</strong> After logging in, you can view all your upcoming events here.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Add Event:</strong> Navigate to the "Add Event" page to create a new event. Provide the title, date, time, location, and optional description.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Edit/Delete Event:</strong> On the Dashboard, you can delete and/or edit events.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Logout:</strong> Click the Logout button in the navigation bar to securely log out of your account.
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
