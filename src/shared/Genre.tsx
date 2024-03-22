import { MdComicMdGenre } from "../models/Comic";

export default function Genre({
  genre,
  className,
}: {
  genre: MdComicMdGenre;
  className: string;
}) {
  return (
    <span className={`bg-emerald-700 p-1 rounded-md ${className}`}>
      {genre?.md_genres.name}
    </span>
  );
}
