import { MdComicMdGenre } from "../../../models/comics";

function ListGenres({ genre }: { genre?: MdComicMdGenre }) {
  return (
    <span className="text-xs bg-emerald-700 p-1 rounded-md">
      {genre?.md_genres.name}
    </span>
  );
}

export default ListGenres;
