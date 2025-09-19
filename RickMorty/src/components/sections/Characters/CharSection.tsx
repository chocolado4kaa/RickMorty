import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../../services/api";
import Card from "../../common/Card";

const CharSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(data);
  
  return (
    <section className="char-section section">
      <h2 id="chars">Characters</h2>
      <div className="list">
        {data?.results.map((char) => (
          <Card char={char} key={char.id} />
        ))}
      </div>
    </section>
  );
};
export default CharSection;
