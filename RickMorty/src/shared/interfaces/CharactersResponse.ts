import { type Characters } from "./Characters";
export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Characters[];
}