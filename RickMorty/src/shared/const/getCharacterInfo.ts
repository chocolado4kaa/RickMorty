import type { InfoItem } from "../interfaces/characterPage";
import type { Characters } from "../interfaces/Characters";
import type { Episodes } from "../interfaces/Episodes";
import type { Locations } from "../interfaces/Locations";

export const getCharacterInfo = (
  character: Characters,
  origin?: Locations,
  location?: Locations,
  episodes?: Episodes[]
): InfoItem[] => {
  const firstEpisode = episodes?.[0];
  const lastEpisode = episodes?.[episodes.length - 1];

  return [
    {
      title: "Origin",
      obj: origin || character.origin,
      excludeKeys: ["id", "url"],
      componentType: "long",
    },
    {
      title: "Location",
      obj: location || character.location,
      excludeKeys: ["id", "url"],
      componentType: "long",
    },
    {
      title: "First Seen",
      value: firstEpisode
        ? `${firstEpisode.name} (${firstEpisode.episode})`
        : "Unknown",
      componentType: "short",
    },
    {
      title: "Last Seen",
      value: lastEpisode
        ? `${lastEpisode.name} (${lastEpisode.episode})`
        : "Unknown",
      componentType: "short",
    },
  ];
};
