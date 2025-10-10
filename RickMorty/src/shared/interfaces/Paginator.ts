import type { Info } from "./Info";

export type Paginator = {
  page: number;
  info?: Info;
  onPrev: () => void;
  onNext: () => void;
};