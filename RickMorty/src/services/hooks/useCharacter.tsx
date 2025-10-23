import { useQuery } from "@tanstack/react-query";
import { URLS } from "../../shared/const/ApiLinks";
import type { Characters } from "../../shared/interfaces/Characters";

export const useCharacter = (id: number) => {
  return useQuery<Characters>({
    queryKey: ["character", id],
    queryFn: async () =>
      fetch(`${URLS.BASE_URL}${URLS.CHARACTERS}/${id}`).then((res) =>
        res.json(),
      ),
  });
};
