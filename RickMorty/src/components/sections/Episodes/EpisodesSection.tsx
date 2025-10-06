import { SectionHeaders } from "../../../shared/const/Headers";
import { URLS } from "../../../shared/const/ApiLinks";
import type { EpisodesResponse } from "../../../shared/interfaces/EpisodesResponse";
import type { Episodes } from "../../../shared/interfaces/Episodes";
import DataTableSection from "../../common/DataTableSection/DataTableSection";

export const EpisodesSection = () => (
  <DataTableSection<Episodes, EpisodesResponse>
    title="episodes"
    apiUrl={URLS.EPISODES}
    sectionHeader={SectionHeaders.episodes}
  />
);
