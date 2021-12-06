import * as React from "react";
import styles from "./Card.module.css";

interface CardProps {
  href: string;
  title: string;
  body: string;
}

export const Card: React.FC<CardProps> = ({ href, title, body }) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
    </a>
  );
};
