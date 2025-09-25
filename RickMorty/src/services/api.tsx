import { type CharactersResponse } from "../shared/interfaces/CharactersResponse";
import { URLS } from "../shared/const/ApiLinks";

export const fetchCharacters = async (page = 1, name = ""): Promise<CharactersResponse> => {
  const url = new URL(`${URLS.BASE_URL}${URLS.CHARACTERS}`);
  url.searchParams.set("page", String(page));
  if (name.trim()) url.searchParams.set("name", name.trim());

  const response = await fetch(url.toString());
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
}