# Planify

## Overview
**Planify** is a React + Vite web application that allows users to organize and manage personal or professional events.  
Users can register, log in, add events, view them on a dashboard, and delete events. The app uses the **Context API** for state management, with persistent authentication across page refreshes.

---

## Features
- **User Registration & Login** with validation  
- **Persistent Authentication** using localStorage  
- **Add Events** with details: name, date, time, description, location  
- **View Events** dynamically on the Dashboard  
- **Delete Events**  
- **Protected Routes** for dashboard and add-event pages  
- **Navigation Bar** with links to Dashboard, Add Event, Help, Login/Register  
- **Help Page** with instructions on navigating the app  
- Responsive layout using **React-Bootstrap**

---

## Installation

1. Clone the repository:

url is https://github.com/Lungelo9723/Planify.git

2. Navigate to the project folder
3. Install dependencies:
4. Start the development server:
5. Open the app in your browser:

## Usage

1. Go to the Register page to create a new account.
2. Log in with the registered credentials on the Login page.
3. Add events on the Add Event page.
4. View all events on the Dashboard.
5. Delete events if necessary.
6. Use the Help page for guidance on navigating and using the app.

## Folder Structure

src/
├─ components/ - Reusable UI components (NavBar, etc.)
├─ context/ - AuthContext and EventsContext
├─ pages/ - Register, Login, Dashboard, AddEvent, Help
├─ routes/ - ProtectedRoute
├─ main.jsx - App entry point
├─ App.jsx - Main app component (routing)

## Notes

- Event editing/updating is implemented.
- The app uses React Context for managing authentication and events.
- Styling and layout use React-Bootstrap for responsiveness.
* Authentication and events are persisted in localStorage to survive page refreshes.
