import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../../services/api";
import { Card } from "../../common/card/Card";
import { Section } from "../../common/Section";
import { SectionHeaders } from "../../../shared/const/Headers";
import { PageText } from "../../../shared/const/PageText";

export const CharSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (isLoading) return <p>{PageText.loading}</p>;
  if (error) return <p>{PageText.error}</p>;

  return (
    <Section title={SectionHeaders.characters}>
      {data?.results.map((char) => (
        <Card char={char} key={char.id} />
      ))}
    </Section>
  );
};
