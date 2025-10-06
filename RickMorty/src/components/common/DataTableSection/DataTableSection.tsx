import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Section } from "../../common/section/Section";
import { useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { SearchBoxDiv } from "../../common/searchBox/SearchBox";
import { Table } from "../../common/table/table";
import type { DataTableSectionProps } from "../../../shared/interfaces/DataTable";
import type { Info } from "../../../shared/interfaces/Info";

export default function DataTableSection<
  T extends object,
  R extends { results: T[]; info: Info },
>({
  title,
  apiUrl,
  sectionHeader,
  excludeKeys = ["id", "url", "created"] as (keyof T)[],
}: DataTableSectionProps<T>) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery<R>({
    queryKey: [apiUrl, page, search],
    queryFn: () => fetchData(apiUrl, page, search) as Promise<R>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
    );

  const keys = Object.keys(data?.results[0] || {}).filter(
    (key) => !excludeKeys.includes(key as keyof T),
  ) as (keyof T)[];

  const paginator = (
    <PaginatorDiv
      page={page}
      info={data?.info}
      onPrev={() => setPage((p) => p - 1)}
      onNext={() => setPage((p) => p + 1)}
    />
  );

  return (
    <Section title={sectionHeader}>
      <SearchBoxDiv
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        placeholder={`search by ${title}`}
        label={`Search ${title}`}
      />
      {paginator}
      <div className="list">
        <Table data={data?.results || []} columns={keys} />
      </div>
      {paginator}
    </Section>
  );
}
