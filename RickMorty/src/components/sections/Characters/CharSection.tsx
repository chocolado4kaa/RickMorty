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
import { toast } from "react-hot-toast";

export const CharSection = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", page, search],
    queryFn: () =>
      fetchData(URLS.CHARACTERS, page, search) as Promise<CharactersResponse>,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
    retry: 1,
  });
  
  if (error) {
    toast.error(error.message || PageText.error);
    setInputValue("");
    setSearch("");
  }

  const skeletons = Array.from({ length: data?.results.length || 18 });

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
    <Section title={SectionHeaders().characters}>
      <SearchBoxDiv
        value={inputValue}
        onChange={(v) => setInputValue(v)}
        onKeyDown={handleSearchKey} 
        placeholder="Search by name… (e.g., Rick)"
        label="Search characters"
      />
      {paginator}
      <div className="list">
        {isLoading
          ? skeletons.map((_, i) => <Card key={i} isLoading />)
          : data?.results.map((char) => <Card {...char} key={char.id} />)}
      </div>
      {paginator}
    </Section>
  );
};