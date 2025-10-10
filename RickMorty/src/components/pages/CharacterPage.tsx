import { useParams } from "react-router";
import { CharacterPageComponent } from "../sections/CharacterPage/CharacterPage";
import { Header } from "../sections/Header/Header";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <p>No character ID provided</p>;

  const numericId = parseInt(id, 10);

  return (
    <>
    <Header />
    <CharacterPageComponent id={numericId} />
    </>
  );
};
