import { yupResolver } from "@hookform/resolvers/yup";
import { Select, SelectProps, Space } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
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
  const schema = yup.object().shape({
    mangaName: yup.string().optional(),
    status: yup
      .number()
      .typeError("Status must be a number")
      .min(0)
      .max(4)
      .optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<{
    mangaName?: string;
    status?: number;
  }> = async (data) => {
    try {
      const result = await getSearchQuery(
        selectedGenres,
        data.status ?? 0,
        selectedSort,
        data.mangaName ?? ""
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
      className="p-4 w-full md:w-2/3 z-10">
      <div className="flex justify-between w-full">
        <input
          className="w-full mr-4 rounded-xl px-4 py-2 bg-zinc-700"
          {...register("mangaName")}
        />
        <button type="submit" className="bg-emerald-700 px-4 rounded-xl">
          Search
        </button>
      </div>
      <p className="text-red-600">{errors.mangaName?.message}</p>
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
      <div id="sort-by" className="flex flex-col w-full">
        <span className="flex jusitify-between items-start gap-8 mt-4">
          <Select
            defaultValue={"None"}
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
            labelRender={(options) => <span>Sort By: {options.label}</span>}
            className="min-w-[50%] z-20 min-h-10 items-center"
          />
          <span className="flex flex-col gap-2 w-full">
            <label className="flex items-center gap-4">
              Status:
              <input
                defaultValue={0}
                className="self-end w-full text-center rounded-xl h-10 bg-zinc-700 p-2"
                {...register("status")}
              />
            </label>
          </span>
        </span>
        {errors.status?.message ? (
          <label className="text-xs text-red-600 self-end mt-2">
            {errors.status.message}
          </label>
        ) : (
          <label className="text-xs text-slate-100/50 self-end mt-2">
            Ongoing: 1, Completed: 2, Cancelled: 3, Hiatus: 4
          </label>
        )}
      </div>
    </form>
  );
}
