import React, { createContext, useContext } from "react";

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
  const [userId, setUserId] = React.useState(null);

  // You can add functions to set the userId if needed

  return (
    <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>
  );
};

export default UserIdContext;
