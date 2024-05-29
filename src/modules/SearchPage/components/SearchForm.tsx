import { yupResolver } from "@hookform/resolvers/yup";
import { Select, SelectProps, Space } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { getSearchQuery } from "../../../api/api-services";
import { Comic } from "../../../models/Comic";
import { Genre } from "../../../models/Genre";
import { SortOptions, StatusOptions } from "../../../models/Options";

export default function SearchForm({
  setSearchResult,
  selectedGenres,
  setSelectedGenres,
  selectedSort,
  setSelectedSort,
  selectedStatus,
  setSelectedStatus,
  genresData,
}: {
  setSearchResult: React.Dispatch<React.SetStateAction<Comic[] | undefined>>;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: number;
  setSelectedStatus: React.Dispatch<React.SetStateAction<number>>;
  genresData: Genre[];
}) {
  const [mangaName, setMangaName] = useState("");

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<{
    mangaName?: string;
    onChangeGenre?: string[];
    onChangeSortBy?: string;
    onChangeStatus?: number;
  }> = async (data) => {
    try {
      const result = await getSearchQuery(
        data.onChangeGenre ?? selectedGenres,
        data.onChangeStatus ?? selectedStatus,
        data.onChangeSortBy ?? selectedSort,
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
    handleSubmit((formData) =>
      onSubmit({ ...formData, onChangeGenre: value }),
    )();
  };

  const handleSortByChange = (value: string) => {
    setSelectedSort(value);
    handleSubmit((formData) =>
      onSubmit({ ...formData, onChangeSortBy: value }),
    )();
  };

  const handleStatusChange = (value: number) => {
    setSelectedStatus(value);
    handleSubmit((formData) =>
      onSubmit({ ...formData, onChangeStatus: value }),
    )();
  };

  const handleReset = () => {
    reset();
    setSelectedGenres([]);
    setSelectedSort("");
    setSelectedStatus(0);
    setMangaName("");
    handleSubmit((formData) => onSubmit({ ...formData, mangaName: "" }))();
  };

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleDebouncedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMangaName(value);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      handleSubmit((formData) => onSubmit({ ...formData, mangaName: value }))();
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="z-10 w-full p-4 md:w-[500px]"
    >
      <div className="flex w-full justify-between gap-4">
        <input
          className="w-full rounded-xl bg-zinc-700 px-4 py-2"
          {...register("mangaName")}
          aria-label="Search Text Input"
          value={mangaName}
          onChange={handleDebouncedChange}
        />
        <button type="submit" className="w-32 rounded-xl bg-emerald-700">
          Search
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-32 rounded-xl bg-red-700 "
        >
          Reset
        </button>
      </div>
      <p className="text-red-600">{errors.mangaName?.message}</p>
      <div id="multi-select">
        <Select
          fieldNames={{ label: "name", value: "slug" }}
          mode="multiple"
          placeholder="Select genres"
          onChange={handleMultiSelectChange}
          value={selectedGenres}
          options={options}
          dropdownStyle={{
            backgroundColor: "rgb(63 ,63 ,70)",
          }}
          optionRender={(option) => (
            <Space className="text-slate-50">{option.data.name}</Space>
          )}
          className="z-20 mt-4 min-h-10 w-full items-center"
          aria-label="Select Genre Input"
          style={{ height: "40px" }}
        />
      </div>
      <div id="sort-by" className="flex w-full gap-4">
        <span className="mt-4 flex w-1/2 items-start justify-between gap-8">
          <Select
            value={selectedSort}
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
            className="z-20 min-h-10 w-full items-center"
            aria-label="Sort By Input"
          />
        </span>
        <span className="mt-4 flex w-1/2 items-start justify-between gap-8">
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            dropdownStyle={{
              backgroundColor: "rgb(63 ,63 ,70)",
            }}
            options={StatusOptions()}
            optionRender={(option) => (
              <Space className="text-slate-50 visited:bg-black">
                {option.data.label}
              </Space>
            )}
            labelRender={(options) => <span>Status: {options.label}</span>}
            className="z-20 min-h-10 w-full items-center"
            aria-label="Status Input"
          />
        </span>
      </div>
    </form>
  );
}
