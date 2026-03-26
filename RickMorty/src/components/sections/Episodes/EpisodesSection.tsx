import { SectionHeaders } from "../../../shared/const/Headers";
import { URLS } from "../../../shared/const/ApiLinks";
import type { Episodes } from "../../../shared/interfaces/Episodes";
import DataTableSection from "../../common/DataTableSection/DataTableSection";
import { EPISODE_FILTERS } from "../../../shared/interfaces/filters";

export const EpisodesSection = DataTableSection<Episodes>({
  filter: EPISODE_FILTERS,
  apiUrl: URLS.EPISODES,
  sectionHeader: SectionHeaders().episodes,
});
