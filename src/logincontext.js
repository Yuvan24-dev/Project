import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("Authtoken"); 
      if (token) {
        setAuthToken(token); 
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const login = (token) => {
    try {
      localStorage.setItem("Authtoken", token); 
      setAuthToken(token); 
    } catch (error) {
      console.error("Error setting token in localStorage:", error);
    }
  };

 
  const logout = () => {
    try {
      localStorage.removeItem("Authtoken");
      setAuthToken(null); 
    } catch (error) {
      console.error("Error removing token from localStorage:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
