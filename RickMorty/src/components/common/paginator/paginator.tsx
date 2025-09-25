import type { Paginator } from "../../../shared/interfaces/Paginator";
import styles from "./paginator.module.scss";

export const PaginatorDiv = ({ page, info, onPrev, onNext }: Paginator) => {
  const canPrev = !!info?.prev;
  const canNext = !!info?.next;

  return (
    <div className={styles.paginator}>
      <button type="button" onClick={onPrev} disabled={!canPrev}>
        Previous
      </button>
      <span>
        Page {page} of {info?.pages ?? "…"}
      </span>
      <button type="button" onClick={onNext} disabled={!canNext}>
        Next
      </button>
    </div>
  );
};
