import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Section } from "../../common/section/Section";
import { SectionHeaders } from "../../../shared/const/Headers";
import { PageText } from "../../../shared/const/PageText";
import { useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { SearchBoxDiv } from "../../common/searchBox/SearchBox";
import { URLS } from "../../../shared/const/ApiLinks";
import type { LocationsResponse } from "../../../shared/interfaces/LocationsResponse";
import { Table } from "../../common/table/table";
import type { Locations } from "../../../shared/interfaces/Locations";

export const LocationsSection = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["locations", page, search],
    queryFn: () =>
      fetchData(URLS.LOCATIONS, page, search) as Promise<LocationsResponse>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });
  if (isLoading) return <p>{PageText.loading}</p>;
  if (error) return <p>{PageText.error}</p>;

  const keys = Object.keys(data?.results[0] || {})
    .filter((key) => key !== "id" && key !== "url" && key !== "created") as (keyof Locations)[];

  return (
    <Section title={SectionHeaders.locations}>
      <SearchBoxDiv
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        placeholder="Search by name… (e.g., Earth)"
        label="Search locations"
      />
      <div className="list">
        <Table title="Locations" data={data?.results || []} columns={keys} />
      </div>
      <PaginatorDiv
        page={page}
        info={data?.info}
        onPrev={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />
    </Section>
  );
};
