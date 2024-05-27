import { MdComicMdGenre } from "../models/Comic";

export default function Genre({
  genre,
  className,
}: {
  genre: MdComicMdGenre;
  className: string;
}) {
  return (
    <span className={`rounded-md p-1 ${className}`}>
      {genre?.md_genres.name}
    </span>
  );
}
