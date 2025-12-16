Planify

Overview
Planify is a React + Vite web application that allows users to organize and manage personal or professional events.
Users can register, log in, add events, view them on a dashboard, and delete events. The app uses the Context API for state management, with persistent authentication across page refreshes.

Features

User Registration & Login with validation

Persistent Authentication using localStorage

Add Events with details: name, date, time, description, location

View Events dynamically on the Dashboard

Delete Events

Protected Routes for dashboard and add-event pages

Navigation Bar with links to Dashboard, Add Event, Help, Login/Register

Help Page with instructions on navigating the app

Responsive layout using React-Bootstrap

Installation

Clone the repository:
git clone https://github.com/Lungelo9723/Planify.git

Navigate to the project folder:
cd Planify

Install dependencies:
npm install

Start the development server:
npm run dev

Open the app in your browser:
http://localhost:5173

Usage

Go to the Register page to create a new account.

Log in with the registered credentials on the Login page.

Add events on the Add Event page.

View all events on the Dashboard.

Delete events if necessary.

Use the Help page for guidance on navigating and using the app.

Folder Structure
src/
├─ components/ - Reusable UI components (NavBar, etc.)
├─ context/ - AuthContext and EventsContext
├─ pages/ - Register, Login, Dashboard, AddEvent, Help
├─ routes/ - ProtectedRoute
├─ main.jsx - App entry point
├─ App.jsx - Main app component (routing)

Notes

Event editing/updating is implemented.

The app uses React Context for managing authentication and events.

Styling and layout use React-Bootstrap for responsiveness.

Authentication and events are persisted in localStorage to survive page refreshes.