export const SectionHeaders = (characterName?: string) => ({
  characters: {href: "#characters", id: "characters", text: "Characters" },
  locations: {href: "#locations", id: "locations", text: "Locations" },
  episodes: {href: "#episodes", id: "episodes", text: "Episodes" },
  characterInfo: {href: "#info", id: "info", text: characterName || "Info" },
  mainPage: {href: "/RickMorty/", id: "main", text: "Main"},
});
