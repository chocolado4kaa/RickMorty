import type { CharactersResponse } from "./CharactersResponse"; 

export type Paginator = {
  page: number;
  info?: CharactersResponse["info"];
  onPrev: () => void;
  onNext: () => void;
};