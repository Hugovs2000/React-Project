import { IComic } from "../../../models/comics";
import convertToUrl from "../../../services/convert-image-string";
import Genre from "../../../shared/Genre";

function MangaHeader({ topData }: { topData: IComic }) {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-cover relative shadow-slate-50/30 shadow-lg"
        style={{
          backgroundImage: `url(${convertToUrl(topData.comic.md_covers[0].b2key)})`,
        }}>
        <div className="z-[1] p-1 w-full flex justify-around bg-emerald-700 rounded-b-md">
          <div className="w-1/2 text-center">
            {topData.comic.last_chapter} chapters
          </div>
          |
          <div className="w-1/2 text-center">
            {topData.comic.user_follow_count} followers
          </div>
        </div>
        <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className=" absolute z-[1] w-full h-full bg-gradient-to-t from-black/95 to-60%"></div>
        <div className="flex flex-col justify-center items-center z-[1] w-full">
          <img
            src={convertToUrl(topData.comic.md_covers[0].b2key)}
            alt="Cover"
            className="rounded-xl border-2 border-slate-50 max-h-52 md:max-h-96 m-8 mb-2 w-fit"
          />
          <div className="text-xs">
            By:{" "}
            {!topData.authors?.[0]?.name
              ? "Unknown"
              : topData?.authors?.[0]?.name}
          </div>
          <div className="text-xs">Released: {topData.comic.year}</div>
          <div className="w-full text-center text-3xl font-bold m-4 mt-8 px-2">
            {topData.comic.title}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-2 md:gap-4 m-4 mt-6 flex-wrap">
          {topData.comic.md_comic_md_genres.map((genre) => (
            <Genre
              genre={genre}
              className="p-1 md:p-2 text-sm"
              key={genre.md_genres.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MangaHeader;
