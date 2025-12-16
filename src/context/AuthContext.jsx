import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    // Persisted registered user
  const [registeredUser, setRegisteredUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUser")) || null;
  });

  // Persisted logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const register = (userData) => {
    setRegisteredUser(userData);
  };

  const login = ({ username, password }) => {
    if (
      registeredUser &&
      registeredUser.username === username &&
      registeredUser.password === password
    ) {
      setCurrentUser(registeredUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  // Persist registered user
  useEffect(() => {
    if (registeredUser) {
      localStorage.setItem(
        "registeredUser",
        JSON.stringify(registeredUser)
      );
    } else {
      localStorage.removeItem("registeredUser");
    }
  }, [registeredUser]);

  // Persist logged-in user
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);


  return (
    <AuthContext.Provider
      value={{
        registeredUser,
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
