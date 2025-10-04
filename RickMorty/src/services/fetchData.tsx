import { URLS } from "../shared/const/ApiLinks";
import type { CharactersResponse } from "../shared/interfaces/CharactersResponse";
import type { LocationsResponse } from "../shared/interfaces/LocationsResponse";

type ResponsesMap = {
  [URLS.CHARACTERS]: CharactersResponse;
  [URLS.LOCATIONS]: LocationsResponse;
};

export async function fetchData<E extends keyof ResponsesMap>(
  endpoint: E,
  page = 1,
  name = "",
): Promise<ResponsesMap[E]> {
  const url = new URL(`${URLS.BASE_URL}${endpoint}`);
  url.searchParams.set("page", String(page));
  if (name.trim()) url.searchParams.set("name", name.trim());

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error("Failed to fetch");

  return await res.json();
}
