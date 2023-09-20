import React, { createContext, useContext, useState } from "react";

// Create the context
const UserIdContext = createContext();

// Create a custom hook for consuming the UserId context
export const useUserId = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error("useUserId must be used within a UserIdProvider");
  }
  return context;
};

// Create the UserIdProvider component
export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Function to set the userId
  const setUserIdValue = (newUserId) => {
    setUserId(newUserId);
  };

  // Provide the userId and the setUserId function
  return (
    <UserIdContext.Provider value={{ userId, setUserId: setUserIdValue }}>
      {children}
    </UserIdContext.Provider>
  );
};
