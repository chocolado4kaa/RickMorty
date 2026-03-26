import { SectionHeaders } from "../../../shared/const/Headers";
import { URLS } from "../../../shared/const/ApiLinks";
import type { Locations } from "../../../shared/interfaces/Locations";
import DataTableSection from "../../common/DataTableSection/DataTableSection";
import { LOCATION_FILTERS } from "../../../shared/interfaces/filters";

export const LocationsSection = DataTableSection<Locations>({
  filter: LOCATION_FILTERS,
  apiUrl: URLS.LOCATIONS,
  sectionHeader: SectionHeaders().locations,
});
