import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Load logged-in user on first render
  useEffect(() => {
    const savedUser = localStorage.getItem("khally-user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (userData) => {
    const allUsers = JSON.parse(localStorage.getItem("khally-users")) || [];
    const userExists = allUsers.find(u => u.email === userData.email);

    if (userExists) {
      alert("User already exists");
      return false;
    }

    const updatedUsers = [...allUsers, userData];
    localStorage.setItem("khally-users", JSON.stringify(updatedUsers));
    localStorage.setItem("khally-user", JSON.stringify(userData));
    setCurrentUser(userData);
    return true;
  };

  const login = (email, password) => {
    const allUsers = JSON.parse(localStorage.getItem("khally-users")) || [];
    const user = allUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("khally-user", JSON.stringify(user));
      setCurrentUser(user);
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("khally-user");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
