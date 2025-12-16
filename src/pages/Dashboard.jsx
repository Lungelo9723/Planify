import { useContext, useState } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import EventsContext from "../context/EventsContext";
import NavBar from "../components/NavBar";

export default function Dashboard() {
  const { events, deleteEvent, updateEvent } = useContext(EventsContext);
  const [editingId, setEditingId] = useState(null);
  const [editedEvent, setEditedEvent] = useState({});

  const startEditing = (event) => {
    setEditingId(event.id);
    setEditedEvent(event);
  };

  const handleSave = () => {
    updateEvent(editingId, editedEvent);
    setEditingId(null);
  };

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <h2>Dashboard</h2>

        {events.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {events.map((event) => (
              <Col key={event.id}>
                <Card>
                  <Card.Body>
                    {editingId === event.id ? (
                      <>
                        <Form.Control
                          className="mb-2"
                          value={editedEvent.title}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              title: e.target.value,
                            })
                          }
                        />
                        <Form.Control
                          type="date"
                          className="mb-2"
                          value={editedEvent.date}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              date: e.target.value,
                            })
                          }
                        />
                        <Form.Control
                          type="time"
                          className="mb-2"
                          value={editedEvent.time}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              time: e.target.value,
                            })
                          }
                        />
                        <Form.Control
                          className="mb-2"
                          value={editedEvent.location}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              location: e.target.value,
                            })
                          }
                        />
                        <Form.Control
                          as="textarea"
                          className="mb-2"
                          value={editedEvent.description}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              description: e.target.value,
                            })
                          }
                        />

                        <Button size="sm" onClick={handleSave}>
                          Save
                        </Button>{" "}
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {event.date} {event.time}
                        </Card.Subtitle>
                        <Card.Text>
                          {event.location}
                          <br />
                          {event.description}
                        </Card.Text>

                        <Button
                          size="sm"
                          variant="warning"
                          onClick={() => startEditing(event)}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => deleteEvent(event.id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
