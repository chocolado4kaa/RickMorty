import type { InfoComponentProps } from "../../../shared/interfaces/characterPage";
import styles from "./Info.module.scss";

export const Info = ({
  title,
  children,
  type = "short",
}: InfoComponentProps) => {
  return (
    <div className={styles.info}>
      {type === "short" ? (
        <>
          {title}: {children}
        </>
      ) : type === "long" ? (
        <>
          {title && <h2>{title}</h2>}
          <div className={styles.text}>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
};
