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
  const [selectedSort, setSelectedSort] = useState<string>("");

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await getSearchQuery(
        selectedGenres,
        selectedSort,
        data.mangaName
      );
      setSearchResult(result);
      console.log(result);
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  if (loadingGenres) {
    return <div className="m-4">Loading...</div>;
  }

  if (!genresData) return <div className="m-4">Hello</div>;

  const options: SelectProps["options"] = genresData;

  const handleMultiSelectChange = (value: string[]) => {
    setSelectedGenres(value);
  };

  const handleSortByChange = (value: string) => {
    setSelectedSort(value);
  };

  return (
    <div className="flex flex-col items-center text-slate-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 w-full md:w-1/2 z-10">
        <div className="flex justify-between w-full">
          <input
            className="w-full mr-4 rounded-xl px-4 py-2 bg-zinc-700"
            {...register("mangaName")}
          />
          <button type="submit" className="bg-emerald-700 px-4 rounded-xl">
            Search
          </button>
        </div>
        <div id="multi-select">
          <Select
            fieldNames={{ label: "name", value: "slug" }}
            mode="multiple"
            placeholder="Select genres"
            onChange={handleMultiSelectChange}
            options={options}
            dropdownStyle={{
              backgroundColor: "rgb(63 ,63 ,70)",
            }}
            optionRender={(option) => (
              <Space className="text-slate-50">{option.data.name}</Space>
            )}
            className="w-full mt-4 z-20 min-h-10 items-center"
          />
        </div>
        <div id="sort-by">
          <Select
            defaultValue={"Sort by"}
            onChange={handleSortByChange}
            dropdownStyle={{
              backgroundColor: "rgb(63 ,63 ,70)",
            }}
            options={[
              { value: "view", label: "View count" },
              { value: "created_at", label: "Created at" },
              { value: "uploaded", label: "Uploaded at" },
              { value: "rating", label: "Rating" },
              { value: "follow", label: "Follow count" },
              { value: "user_follow_count", label: "User follow count" },
            ]}
            optionRender={(option) => (
              <Space className="text-slate-50 visited:bg-black">
                {option.data.label}
              </Space>
            )}
            className="w-1/2 mt-4 z-20 min-h-10 items-center"
          />
        </div>
      </form>
      {searchResult && (
        <div className="w-full md:w-1/2 z-0">
          <h2 className="mx-8 mt-4 md:mt-8 text-lg">Top Results</h2>
          <div className="h-96 mt-2 md:mt-6 carousel carousel-vertical w-full gap-4 px-6">
            {searchResult
              .filter((comic) => comic.content_rating === "safe")
              .map((comic) => (
                <Link
                  to="/details/$manga"
                  params={{
                    manga: comic.slug!,
                  }}
                  key={comic.slug}
                  className="w-full">
                  <div className="carousel-item h-full w-full justify-center flex">
                    <SearchCard comic={comic} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
