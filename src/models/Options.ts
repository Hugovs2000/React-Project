import { DefaultOptionType } from "antd/es/select";

export function SortOptions() {
  const sortOptions: DefaultOptionType[] = [
    { value: "", label: "None" },
    { value: "view", label: "View count" },
    { value: "created_at", label: "Created at" },
    { value: "uploaded", label: "Uploaded at" },
    { value: "rating", label: "Rating" },
    { value: "user_follow_count", label: "Follow count" },
  ];

  return sortOptions;
}

export function StatusOptions() {
  const statusOptions: DefaultOptionType[] = [
    { value: 0, label: "None" },
    { value: 1, label: "Ongoing" },
    { value: 2, label: "Completed " },
    { value: 3, label: "Cancelled" },
    { value: 4, label: "Hiatus" },
  ];

  return statusOptions;
}
