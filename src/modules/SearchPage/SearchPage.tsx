import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Select, SelectProps, Space } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getGenres, getSearchQuery } from "../../api/api-services";
import { Comic } from "../../models/Comic";
import SearchCard from "./components/SearchCard";

type Inputs = {
  mangaName: string;
};

function SearchPage() {
  const { data: genresData, isLoading: loadingGenres } = useQuery({
    queryKey: [`getGenres`],
    queryFn: () => getGenres(),
  });

  const [searchResult, setSearchResult] = useState<Comic[]>();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([""]);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await getSearchQuery(selectedGenres, data.mangaName);
      setSearchResult(result);
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  if (loadingGenres) {
    return <div className="m-4">Loading...</div>;
  }

  if (!genresData) return <div className="m-4">Hello</div>;

  const options: SelectProps["options"] = genresData;

  const handleChange = (value: string[]) => {
    setSelectedGenres(value);
  };

  return (
    <div className="text-slate-50 flex flex-col h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="m-4">
        <div className="flex justify-between w-full">
          <input
            className="w-full mr-4 rounded-full px-4 py-2"
            {...register("mangaName")}
          />
          <input type="submit" className="bg-emerald-700 px-4 rounded-full" />
        </div>
        <Select
          fieldNames={{ label: "name", value: "slug" }}
          mode="multiple"
          placeholder="Select genres"
          onChange={handleChange}
          options={options}
          optionRender={(option) => <Space>{option.data.name}</Space>}
          className="w-full mt-4 z-20 h-10"
        />
      </form>
      {searchResult && (
        <div className="">
          <h2 className="m-4 text-lg">Top Results</h2>
          <div className="p-4 pb-8 flex flex-col gap-12 items-center overflow-y-scroll">
            {searchResult.map((comic) => (
              <Link
                to="/details/$manga"
                params={{
                  manga: comic.slug!,
                }}
                key={comic.slug}>
                <SearchCard comic={comic} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
