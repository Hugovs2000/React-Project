import { MdComicMdGenre } from "../models/Comic";

export default function Genre({
  genre,
  className,
}: {
  genre: MdComicMdGenre;
  className: string;
}) {
  return (
    <span className={`rounded-md bg-emerald-700 p-1 ${className}`}>
      {genre?.md_genres.name}
    </span>
  );
}
