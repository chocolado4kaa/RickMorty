import { URLS } from "../shared/const/ApiLinks";
import type { CharactersResponse } from "../shared/interfaces/CharactersResponse";
import type { LocationsResponse } from "../shared/interfaces/LocationsResponse";
import type { EpisodesResponse } from "../shared/interfaces/EpisodesResponse";
import type { FilterValues } from "../shared/interfaces/filters";

type ResponsesMap = {
  [URLS.CHARACTERS]: CharactersResponse;
  [URLS.LOCATIONS]: LocationsResponse;
  [URLS.EPISODES]: EpisodesResponse;
};

export async function fetchData<E extends keyof ResponsesMap>(
  endpoint: E,
  page = 1,
  filters: FilterValues = {},
): Promise<ResponsesMap[E]> {
  const url = new URL(`${URLS.BASE_URL}${endpoint}`);
  url.searchParams.set("page", String(page));

  Object.entries(filters).forEach(([key, value]) => {
    if (value.trim()) url.searchParams.set(key, value.trim());
  });

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
}
