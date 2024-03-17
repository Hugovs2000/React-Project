import { Link } from "@tanstack/react-router";
import { IComicChapters } from "../../../models/comicChapters";
import { Comic } from "../../../models/comics";
import Chapter from "./Chapter";

export default function MangaChapters({
  comic,
  comicChaptersData,
}: {
  comic: Comic;
  comicChaptersData: IComicChapters;
}) {
  const twentyChapters = comicChaptersData.chapters
    ?.filter(
      (item) =>
        item.group_name?.[0] === comicChaptersData.chapters[0].group_name?.[0]
    )
    .slice(0, 20);

  return (
    <>
      <div className="w-full flex flex-col items-start md:items-center mb-4 px-4 space-y-6">
        {twentyChapters.map((chap) => (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: comic.slug,
              chapter: chap.hid,
            }}
            className="gap-4 flex w-full md:w-4/5 justify-around items-center rounded-lg bg-zinc-700 py-2"
            key={chap.hid}>
            <Chapter chap={chap} />
          </Link>
        ))}
      </div>
    </>
  );
}
