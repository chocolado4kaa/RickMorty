import type { Episodes } from "./Episodes";
import type { Info } from "./Info";
export interface EpisodesResponse {
  info: Info;
  results: Episodes[];
}