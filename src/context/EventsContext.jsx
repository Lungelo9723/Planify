import { createContext, useState, useEffect, } from "react";

const EventsContext = createContext();
export default EventsContext;

export const EventsProvider =({children}) => {
  const [events, setEvents] = useState(() => {
  return JSON.parse(localStorage.getItem("events")) || [];
});

// Add a new event
  const addEvent = (eventData) => {
    const newEvent = { id: crypto.randomUUID(), ...eventData };
    setEvents((prev) => [...prev, newEvent]);
  };

  // Update event
  const updateEvent = (eventId, updatedData) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, ...updatedData } : event
      )
    );
  };

  // Delete an event by id
  const deleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

 // Persist events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}