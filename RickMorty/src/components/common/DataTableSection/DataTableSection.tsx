import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Section } from "../../common/section/Section";
import { useState } from "react";
import { PaginatorDiv } from "../../common/paginator/paginator";
import { SearchBoxDiv } from "../../common/searchBox/SearchBox";
import { Table } from "../../common/table/table";
import type { DataTableSectionProps } from "../../../shared/interfaces/DataTable";
import type { Info } from "../../../shared/interfaces/Info";
import toast from "react-hot-toast";
import { PageText } from "../../../shared/const/PageText";

export default function DataTableSection<
  T extends object,
  R extends { results: T[]; info: Info }
>({
  title,
  apiUrl,
  sectionHeader,
  excludeKeys = ["id", "url", "created"] as (keyof T)[],
}: DataTableSectionProps<T>) {
  return function DataTable() {
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");

    const { data, isLoading, isError, error } = useQuery<R>({
      queryKey: [apiUrl, page, search],
      queryFn: () => fetchData(apiUrl, page, search) as Promise<R>,
      placeholderData: keepPreviousData,
      staleTime: 30_000,
      retry: 1,
    });

    if (isError) {
      toast.error(error.message || PageText.error);
      setInputValue("");
      setSearch("");
    }
    const keys = Object.keys(data?.results[0] || {}).filter(
      (key) => !excludeKeys.includes(key as keyof T)
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

    const handleSearchKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setSearch(inputValue);
        setPage(1);
      }
    };

    return (
      <Section title={sectionHeader}>
        <SearchBoxDiv
          value={inputValue}
          onChange={(v) => setInputValue(v)}
          onKeyDown={handleSearchKey}
          placeholder={`search by ${title}`}
          label={`Search ${title}`}
        />
        {paginator}
        <div className="list">
          {isLoading ? (
            <Table data={skeletons} columns={keys} isLoading={true} />
          ) : (
            <Table data={data?.results || []} columns={keys} />
          )}
        </div>
        {paginator}
      </Section>
    );
  };
}
