import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Section } from "../../common/section/Section";
import { useEffect, useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { Table } from "../../common/table/table";
import type { DataTableSectionProps } from "../../../shared/interfaces/DataTable";
import type { Info } from "../../../shared/interfaces/Info";
import toast from "react-hot-toast";
import { PageText } from "../../../shared/const/PageText";
import type { FilterValues } from "../../../shared/interfaces/filters";
import { FilterPanel } from "../FilterPanel/FilterPanel";

export default function DataTableSection<T extends object>({
  filter,
  apiUrl,
  sectionHeader,
  excludeKeys = ["id", "url", "created"] as (keyof T)[],
}: DataTableSectionProps<T>) {
  return function DataTable() {
    const [page, setPage] = useState(1);
    const [debouncedPage, setDebouncedPage] = useState(1);
    const [filters, setFilters] = useState<FilterValues>({});

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedPage(page), 300);
      return () => clearTimeout(timer);
    }, [page]);

    const { data, isLoading, error } = useQuery<{ results: T[]; info: Info }>({
      queryKey: [apiUrl, debouncedPage, filters],
      queryFn: () =>
        fetchData(apiUrl, debouncedPage, filters) as Promise<{
          results: T[];
          info: Info;
        }>,
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

    const keys = Object.keys(data?.results[0] || {}).filter(
      (key) => !excludeKeys.includes(key as keyof T),
    ) as (keyof T)[];

    const skeletons = new Array<T>(data?.results.length || 18).fill({} as T);

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
        <FilterPanel fields={filter} onApply={handleFilters} />
        {paginator}
        <div className="list">
          {isLoading ?
            <Table data={skeletons} columns={keys} isLoading={true} />
          : <Table data={data?.results || []} columns={keys} />}
        </div>
        {paginator}
      </Section>
    );
  };
}
