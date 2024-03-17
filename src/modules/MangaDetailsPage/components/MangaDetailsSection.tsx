import { IComic } from "../../../models/comics";
import Genre from "../../../shared/Genre";

export default function MangaDetailsSection({ topData }: { topData: IComic }) {
  return (
    <>
      <h2 className="mx-4 mb-0 font-bold">Genres</h2>
      <div className="flex justify-start gap-2 md:gap-4 m-4 flex-wrap">
        {topData.comic.md_comic_md_genres.map((genre) => (
          <Genre
            genre={genre}
            className="p-1 md:p-2 text-sm"
            key={genre.md_genres.name}
          />
        ))}
      </div>
      <div>
        <h2 className="mx-4 mb-0 font-bold">Description</h2>
        <div className="text-pretty m-4 mt-2 overflow-scroll whitespace-break-spaces">
          {topData.comic.desc}
        </div>
      </div>
    </>
  );
}
