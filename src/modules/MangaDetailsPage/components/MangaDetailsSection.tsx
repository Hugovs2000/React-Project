import Markdown from "react-markdown";
import { Comic } from "../../../models/Comic";
import Genre from "../../../shared/Genre";

export default function MangaDetailsSection({ topData }: { topData: Comic }) {
  return (
    <>
      <h2 className="mx-4 mb-0 font-bold">Genres</h2>
      <div className="m-4 flex flex-wrap justify-start gap-2 md:gap-4">
        {topData?.comic?.md_comic_md_genres?.map((genre) => (
          <Genre
            genre={genre}
            className="p-1 text-sm md:p-2"
            key={genre.md_genres.name}
          />
        ))}
      </div>
      <div>
        <h2 className="mx-4 mb-0 font-bold">Description</h2>
        <div
          id="manhwa-desc"
          className="m-4 mt-2 overflow-scroll whitespace-break-spaces text-pretty"
        >
          <Markdown>{topData?.comic?.desc}</Markdown>
        </div>
      </div>
    </>
  );
}
