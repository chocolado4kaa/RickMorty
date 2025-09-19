import { type CharactersResponse } from "../shared/interfaces/CharactersResponse";
import { URLS } from "../shared/const/ApiLinks";

export const fetchCharacters = async (): Promise<CharactersResponse> => {
  const response = await fetch(`${URLS.BASE_URL}${URLS.CHARACTERS}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
}