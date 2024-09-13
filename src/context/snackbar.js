import React, { useState, createContext } from "react";

const SnackBarContext = createContext(null);

const SnackBarProvider = ({ children }) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [visibleProductId, setVisibleProductId] = useState(null);

  const handleSnackOpen = (productId, showMessage) => {
    setSnackBarOpen(true);
    setVisibleProductId(productId);
    setSnackMessage(showMessage);
    setTimeout(() => {
      setSnackBarOpen(false);
      setVisibleProductId(null);
    }, 2000);
  };

  return (
    <SnackBarContext.Provider
      value={{ handleSnackOpen, snackMessage, snackBarOpen, visibleProductId }}>
      {children}
    </SnackBarContext.Provider>
  );
};

export { SnackBarContext, SnackBarProvider };
