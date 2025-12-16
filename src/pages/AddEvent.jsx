import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import EventsContext from "../context/EventsContext";
import NavBar from "../components/NavBar";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const { addEvent } = useContext(EventsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !time || !location) return;

    addEvent({ title, date, time, location, description });

    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setDescription("");
    setSuccess(true);
  };

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Add Event</Card.Title>
            {success && <Alert variant="success">Event added successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>

              <Button type="submit" variant="primary">Add Event</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
