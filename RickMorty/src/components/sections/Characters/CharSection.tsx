import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchData } from "../../../services/fetchData";
import { URLS } from "../../../shared/const/ApiLinks";
import { SectionHeaders } from "../../../shared/const/Headers";
import { PageText } from "../../../shared/const/PageText";
import type { CharactersResponse } from "../../../shared/interfaces/CharactersResponse";
import {
  type FilterValues,
  CHARACTER_FILTERS,
} from "../../../shared/interfaces/filters";
import { Card } from "../../common/card/Card";
import { FilterPanel } from "../../common/FilterPanel/FilterPanel";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { Section } from "../../common/section/Section";

export const CharSection = () => {
  const [page, setPage] = useState(1);
  const [debouncedPage, setDebouncedPage] = useState(1);
  const [filters, setFilters] = useState<FilterValues>({});

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedPage(page), 300);
    return () => clearTimeout(timer);
  }, [page]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", debouncedPage, filters],
    queryFn: () =>
      fetchData(
        URLS.CHARACTERS,
        debouncedPage,
        filters,
      ) as Promise<CharactersResponse>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
    retry: 1,
  });

  useEffect(() => {
    if (error) toast.error(error.message || PageText.error);
    setFilters({});
  }, [error]);

  const handleFilters = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setPage(1);
  };

  const skeletons = Array.from({ length: data?.results.length || 18 });

  const paginator = (
    <PaginatorDiv
      page={page}
      info={data?.info}
      onPrev={() => setPage((p) => p - 1)}
      onNext={() => setPage((p) => p + 1)}
    />
  );

  return (
    <Section title={SectionHeaders().characters}>
      <FilterPanel fields={CHARACTER_FILTERS} onApply={handleFilters} />
      {paginator}
      <div className="list">
        {isLoading ?
          skeletons.map((_, i) => <Card key={i} isLoading />)
        : data?.results.map((char) => <Card {...char} key={char.id} />)}
      </div>
      {paginator}
    </Section>
  );
};
