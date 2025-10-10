import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Card } from "../../common/card/Card";
import { Section } from "../../common/section/Section";
import { SectionHeaders } from "../../../shared/const/Headers";
import { PageText } from "../../../shared/const/PageText";
import { useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { SearchBoxDiv } from "../../common/searchBox/SearchBox";
import { URLS } from "../../../shared/const/ApiLinks";
import type { CharactersResponse } from "../../../shared/interfaces/CharactersResponse";

export const CharSection = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", page, search],
    queryFn: () =>
      fetchData(URLS.CHARACTERS, page, search) as Promise<CharactersResponse>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  if (isLoading) return <p>{PageText.loading}</p>;
  if (error) return <p>{PageText.error}</p>;

  const paginator = (
    <PaginatorDiv
      page={page}
      info={data?.info}
      onPrev={() => setPage((p) => p - 1)}
      onNext={() => setPage((p) => p + 1)}
    />
  );

  return (
    <Section title={SectionHeaders.characters}>
      <SearchBoxDiv
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        placeholder="Search by name… (e.g., Rick)"
        label="Search characters"
      />
      {paginator}
      <div className="list">
        {data?.results.map((char) => (
          <Card {...char} key={char.id} />
        ))}
      </div>
      {paginator}
    </Section>
  );
};
