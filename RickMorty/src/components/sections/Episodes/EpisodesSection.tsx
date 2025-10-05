import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Section } from "../../common/section/Section";
import { SectionHeaders } from "../../../shared/const/Headers";
import { PageText } from "../../../shared/const/PageText";
import { useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { SearchBoxDiv } from "../../common/searchBox/SearchBox";
import { URLS } from "../../../shared/const/ApiLinks";
import type { EpisodesResponse } from "../../../shared/interfaces/EpisodesResponse";
import { Table } from "../../common/table/table";
import type { Episodes } from "../../../shared/interfaces/Episodes";

export const EpisodesSections = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["episodes", page, search],
    queryFn: () =>
      fetchData(URLS.EPISODES, page, search) as Promise<EpisodesResponse>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });
  if (isLoading) return <p>{PageText.loading}</p>;
  if (error) return <p>{PageText.error}</p>;

  const keys = Object.keys(data?.results[0] || {}).filter(
    (key) => key !== "id" && key !== "url" && key !== "created"
  ) as (keyof Episodes)[];

  const paginator = (
    <PaginatorDiv
      page={page}
      info={data?.info}
      onPrev={() => setPage((p) => p - 1)}
      onNext={() => setPage((p) => p + 1)}
    />
  );

  return (
    <Section title={SectionHeaders.episodes}>
      <SearchBoxDiv
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        placeholder="Search by episode... (e.g., S01E01 or Pilot)"
        label="Search episodes"
      />
      {paginator}
      <div className="list">
        <Table data={data?.results || []} columns={keys} />
      </div>
      {paginator}
    </Section>
  );
};
