import type { Characters } from "./Characters";
import type { Info } from "./Info";
export interface CharactersResponse {
  info: Info;
  results: Characters[];
}