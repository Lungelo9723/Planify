import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { EventsProvider } from "./context/EventContext";

import ProtectedRoute from "./routes/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  // Protected routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-event",
    element: (
      <ProtectedRoute>
        <AddEvent />
      </ProtectedRoute>
    ),
  },

  // Public routes
  { path: "/help", element: <Help /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventsProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </EventsProvider>
  </StrictMode>
);
