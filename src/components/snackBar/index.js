import React, { useContext } from "react";
import styles from "./style.module.css";
import { SnackBarContext } from "../../context/snackbar";

const Snackbar = () => {
  const { snackBarOpen, snackMessage } = useContext(SnackBarContext);

  return (
    <>
      {snackBarOpen && (
        <div
          className={`${styles.snackbar} ${snackBarOpen ? styles.show : ""}`}>
          {snackMessage}
        </div>
      )}
    </>
  );
};

export default Snackbar;
