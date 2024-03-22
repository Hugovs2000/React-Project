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

  const { data: genresData, isLoading: loadingGenres } = useQuery({
    queryKey: [`getGenres`],
    queryFn: () => getGenres(),
  });

  if (loadingGenres) {
    return <div className="m-4">Loading...</div>;
  }

  if (!genresData)
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Genres not found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center text-slate-50 min-h-full">
      {genresData && (
        <SearchForm
          setSearchResult={setSearchResult}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          genresData={genresData}
        />
      )}
      {searchResult && <QueryResults searchResult={searchResult} />}
    </div>
  );
}
