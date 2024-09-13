import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const MenuItem = ({ item }) => {
  const hasChildren = item?.children?.length > 0;
  const [toggle, setToggle] = useState(false);
  const handleToggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`${styles.menuItem} ${
        hasChildren ? styles.menuItemWithChildren : ""
      }`}>
      <NavLink
        to={item.path}
        className={hasChildren ? styles.menuItemWithChildren : ""}>
        {item.title}
      </NavLink>
      {/* {hasChildren && <button onClick={handleToggleMenu}>/</button>} */}
      {hasChildren && (
        <div className={`${styles.menuItem_children}`}>
          {item.children.map((child, index) => (
            <div key={index} className={styles.mic_item}>
              <NavLink to={child.path}>{child.title}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
