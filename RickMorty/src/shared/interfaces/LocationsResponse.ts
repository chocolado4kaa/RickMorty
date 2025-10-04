import type { Locations } from "./Locations";
import type { Info } from "./Info";
export interface LocationsResponse {
  info: Info;
  results: Locations[];
}
