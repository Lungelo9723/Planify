import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUser")) || null;
  });

  const [currentUser, setCurrentUser] = useState(null);

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
