import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getGenres } from "../../api/api-services";
import { Comic } from "../../models/Comic";
import QueryResults from "./components/QueryResults";
import SearchForm from "./components/SearchForm";

export default function SearchPage() {
  const [searchResult, setSearchResult] = useState<Comic[]>();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([""]);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<number>(0);

  const { data: genresData, isLoading: loadingGenres } = useQuery({
    queryKey: [`getGenres`],
    queryFn: () => getGenres(),
  });

  if (loadingGenres) {
    return <div className="m-4">Loading...</div>;
  }

  if (!genresData)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="m-4">Genres not found. Return Home</div>
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
      </div>
    );

  return (
    <div className="flex min-h-full flex-col items-center text-slate-50">
      {genresData && (
        <SearchForm
          setSearchResult={setSearchResult}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          genresData={genresData}
        />
      )}
      {searchResult && <QueryResults searchResult={searchResult} />}
    </div>
  );
}
