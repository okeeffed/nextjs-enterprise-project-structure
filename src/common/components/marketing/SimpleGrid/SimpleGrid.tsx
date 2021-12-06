import * as React from "react";
import styles from "./SimpleGrid.module.css";

export const SimpleGrid: React.FC = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
