import { SectionHeaders } from "../../../shared/const/Headers";
import { URLS } from "../../../shared/const/ApiLinks";
import type { LocationsResponse } from "../../../shared/interfaces/LocationsResponse";
import type { Locations } from "../../../shared/interfaces/Locations";
import DataTableSection from "../../common/DataTableSection/DataTableSection";

export const LocationsSection = DataTableSection<Locations, LocationsResponse>({
  title: "locations",
  apiUrl: URLS.LOCATIONS,
  sectionHeader: SectionHeaders.locations
});
