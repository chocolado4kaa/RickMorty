import { useQuery } from "@tanstack/react-query";
import type { Locations } from "../../shared/interfaces/Locations";

export const useLocation = (url?: string) => {
  return useQuery<Locations>({
    queryKey: ["location", url],
    queryFn: async () => fetch(url!).then((res) => res.json()),
    enabled: !!url,
  });
};
