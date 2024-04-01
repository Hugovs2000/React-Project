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
        data.mangaName ?? "",
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
      className="z-10 w-full p-4 md:w-2/3"
    >
      <div className="flex w-full justify-between">
        <input
          className="mr-4 w-full rounded-xl bg-zinc-700 px-4 py-2"
          {...register("mangaName")}
          aria-label="Search Text Input"
        />
        <button type="submit" className="rounded-xl bg-emerald-700 px-4">
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
          className="z-20 mt-4 min-h-10 w-full items-center"
          aria-label="Select Genre Input"
        />
      </div>
      <div id="sort-by" className="flex w-full flex-col">
        <span className="jusitify-between mt-4 flex items-start gap-8">
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
            className="z-20 min-h-10 min-w-[50%] items-center"
            aria-label="Sort By Input"
          />
          <span className="flex w-full flex-col gap-2">
            <label className="flex items-center gap-4">
              Status:
              <input
                defaultValue={0}
                aria-label="Status Input"
                className="h-10 w-full self-end rounded-xl bg-zinc-700 p-2 text-center"
                {...register("status")}
              />
            </label>
          </span>
        </span>
        {errors.status?.message ? (
          <label className="mt-2 self-end text-xs text-red-600">
            {errors.status.message}
          </label>
        ) : (
          <label className="mt-2 self-end text-xs text-slate-100/50">
            Ongoing: 1, Completed: 2, Cancelled: 3, Hiatus: 4
          </label>
        )}
      </div>
    </form>
  );
}
