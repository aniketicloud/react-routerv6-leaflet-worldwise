import { FC } from "react";
import styles from "./Message.module.css";

interface MessageProps {
  message: string;
}

export const Message: FC<MessageProps> = ({ message }) => {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
};
