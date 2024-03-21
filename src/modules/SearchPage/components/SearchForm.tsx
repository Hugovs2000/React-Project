import { Select, SelectProps, Space } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { getSearchQuery } from "../../../api/api-services";
import { Comic } from "../../../models/Comic";
import { Genre } from "../../../models/Genre";
import SortOptions from "../../../models/SortOptions";

export default function SearchForm({
  setSearchResult,
  selectedGenres,
  setSelectedGenres,
  selectedSort,
  setSelectedSort,
  genresData,
}: {
  setSearchResult: React.Dispatch<React.SetStateAction<Comic[] | undefined>>;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  genresData: Genre[];
}) {
  const { register, handleSubmit } = useForm<{ mangaName: string }>();

  const onSubmit: SubmitHandler<{
    mangaName: string;
  }> = async (data) => {
    try {
      const result = await getSearchQuery(
        selectedGenres,
        selectedSort,
        data.mangaName
      );
      setSearchResult(result);
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  const options: SelectProps["options"] = genresData;

  const handleMultiSelectChange = (value: string[]) => {
    setSelectedGenres(value);
  };

  const handleSortByChange = (value: string) => {
    setSelectedSort(value);
  };
  return (
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
          options={SortOptions()}
          optionRender={(option) => (
            <Space className="text-slate-50 visited:bg-black">
              {option.data.label}
            </Space>
          )}
          className="w-1/2 mt-4 z-20 min-h-10 items-center"
        />
      </div>
    </form>
  );
}
