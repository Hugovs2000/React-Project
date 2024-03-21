import { DefaultOptionType } from "antd/es/select";

export default function SortOptions() {
  const sortOptions: DefaultOptionType[] = [
    { value: "", label: "None" },
    { value: "view", label: "View count" },
    { value: "created_at", label: "Created at" },
    { value: "uploaded", label: "Uploaded at" },
    { value: "rating", label: "Rating" },
    { value: "follow", label: "Follow count" },
    { value: "user_follow_count", label: "User follow count" },
  ];

  return sortOptions;
}
