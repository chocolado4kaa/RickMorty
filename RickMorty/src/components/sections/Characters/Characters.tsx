import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../../services/api";

const Characters = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(data);
  
  return (
    <section>
      Characters
      <ul>
        {data?.results.map((char) => (
          <li key={char.id}>
            <img src={char.image} alt={char.name} width={50} />
            {char.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Characters;
