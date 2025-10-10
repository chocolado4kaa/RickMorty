import { useQuery } from "@tanstack/react-query";
import type { Episodes } from "../../shared/interfaces/Episodes";

export const useEpisodes = (urls: string[] = []) => {
  return useQuery<Episodes[]>({
    queryKey: ["episodes", urls],
    queryFn: async () => {
      if (!urls.length) return [];
      const data = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json())),
      );
      return data;
    },
    enabled: urls.length > 0,
  });
};
