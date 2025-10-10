import { useCharacter } from "../../../services/hooks/useCharacter";
import { useLocation } from "../../../services/hooks/useLocation";
import { useEpisodes } from "../../../services/hooks/useEpisodes";
import { Section } from "../../common/section/Section";
import styles from "./characterPage.module.scss";
import { Table } from "../../common/table/table";
import { Info } from "../../common/Info/Info";
import { renderObject } from "../../../services/RenderCharacter";
import { CharacterInfoTitles } from "../../../shared/const/CharacterInfoTitles";
import { getCharacterInfo } from "../../../shared/const/getCharacterInfo";

export const CharacterPageComponent = ({id}: {id: number}) => {
  const { data: character, isLoading: charLoading } = useCharacter(id);
  const { data: origin } = useLocation(character?.origin?.url);
  const { data: location } = useLocation(character?.location?.url);
  const { data: episodes } = useEpisodes(character?.episode);

  if (charLoading) return <p>Loading character...</p>;
  if (!character) return <p>Character not found</p>;

  const infoItems = getCharacterInfo(character, origin, location, episodes);
  const titles = CharacterInfoTitles(character.name);

  const CharDetails = () => {
    return (
      <div className={styles.characterDetails}>
        {infoItems.map((item, index) => (
          <Info key={index} title={item.title} type={item.componentType}>
            {item.obj
              ? renderObject({
                  obj: item.obj,
                  excludeKeys: item.excludeKeys as (keyof typeof item.obj)[],
                })
              : item.value}
          </Info>
        ))}
      </div>
    );
  };

  const CharInformation = () => {
    return (
      <div className={styles.characterInfo}>
        <div className={styles.text}>
          {renderObject({
            obj: character,
            excludeKeys: ["id", "image", "origin", "location", "url"],
          })}
        </div>
        <img src={character.image} alt={character.name} />
      </div>
    );
  };

  return (
    <>
      <Section title={titles.info} className={`character ${styles.character}`}>
        <CharDetails />
        <CharInformation />
      </Section>
      <Section title={titles.table}>
        {episodes?.length ? (
          <Table data={episodes} columns={["name", "episode", "air_date"]} />
        ) : (
          <p>No episode data</p>
        )}
      </Section>
    </>
  );
};
