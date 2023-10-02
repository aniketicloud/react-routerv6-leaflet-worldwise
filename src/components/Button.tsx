import { FC } from "react";

import styles from "./Button.module.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  kind?: "primary" | "back" | "position";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  kind = "primary",
}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[kind]}`}>
      {children}
    </button>
  );
};
