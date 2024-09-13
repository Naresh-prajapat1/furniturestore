import React, { createContext, useEffect, useState } from "react";
const RegisterContext = createContext(null);

const RegisterProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userDetails");
    return savedUser ? JSON.parse(savedUser) : [];
  });

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(user));
  }, [user]);

  const signUpUser = (newUser) => {
    const userExists = user.some(
      (existingUser) => existingUser.email === newUser.email
    );

    if (!userExists) {
      setUser((prevUser) => [...prevUser, newUser]);
      setCurrentUser(newUser);
    } else {
      alert("User already exists.");
    }
  };

  const signInUser = (email, password) => {
    const user = user.find(
      (existingUser) =>
        existingUser.email === email && existingUser.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        signUpUser,
        signInUser,
        currentUser,
      }}>
      {children}
    </RegisterContext.Provider>
  );
};
export { RegisterContext, RegisterProvider };
