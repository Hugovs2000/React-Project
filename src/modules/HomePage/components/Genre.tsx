import { MdComicMdGenre } from "../../../models/Comic";

function Genre({ genre }: { genre?: MdComicMdGenre }) {
  return (
    <span className="text-xs bg-emerald-700 p-1 rounded-md">
      {genre?.md_genres.name}
    </span>
  );
}

export default Genre;
