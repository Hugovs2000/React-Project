import { Link, useRouter } from "@tanstack/react-router";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useMangaStore } from "../../../main";
import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function MangaHeader({ topData }: { topData: Comic }) {
  const router = useRouter();
  const onBack = () => router.history.back();

  const addFavourite = useMangaStore((state) => state.addToFavourites);
  const removeFavourite = useMangaStore((state) => state.removeFromFavourites);
  const existingFavs = useMangaStore((state) => state.favourites);

  let isFav: boolean;

  topData?.comic?.slug && existingFavs.includes(topData?.comic?.slug)
    ? (isFav = true)
    : (isFav = false);

  const handleFavClick = () => {
    if (topData?.comic?.slug) {
      if (isFav) {
        removeFavourite(topData.comic.slug);
      } else {
        addFavourite(topData.comic.slug);
      }
    }
  };

  return (
    topData.comic?.md_covers?.[0]?.b2key && (
      <div
        className="flex flex-col justify-center items-center bg-cover relative shadow-slate-50/30 shadow-lg"
        style={{
          backgroundImage: `url(${convertToUrl(topData.comic?.md_covers?.[0]?.b2key)})`,
        }}>
        <div className="z-10 p-2 w-full flex justify-center items-center bg-emerald-700 rounded-b-md relative">
          <div className="absolute left-0 mx-4 h-fit">
            <button onClick={onBack} className="m-4 text-slate-50">
              <RiArrowGoBackLine className="scale-125" />
            </button>
          </div>
          <div className="w-1/3 mr-2 text-center">
            {topData.comic?.last_chapter} chapters
          </div>
          <div className="w-1/3 ml-2 text-center">
            {topData.comic?.user_follow_count} followers
          </div>
          <div onClick={handleFavClick} className="absolute right-0 mx-4 h-fit">
            {isFav ? (
              <MdFavorite className="scale-125" />
            ) : (
              <MdFavoriteBorder className="scale-125" />
            )}
          </div>
        </div>
        <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className="absolute w-full h-full bg-gradient-to-t from-black/95 to-60%"></div>
        <div className="flex flex-col justify-center items-center z-10 w-full">
          {topData.comic?.slug && topData.firstChap?.hid && (
            <Link
              to="/read/$manga/$chapter"
              params={{
                manga: topData.comic?.slug,
                chapter: topData.firstChap?.hid,
              }}>
              <img
                src={convertToUrl(topData.comic?.md_covers?.[0]?.b2key)}
                alt="Cover"
                className="rounded-xl border-2 border-slate-50 max-h-52 md:max-h-96 m-8 mb-2 w-fit"
              />
            </Link>
          )}
          <div className="text-xs">
            By:{" "}
            {!topData.authors?.[0]?.name
              ? "Unknown"
              : topData?.authors?.[0]?.name}
          </div>
          <div className="text-xs">Released: {topData.comic?.year}</div>
          <div className="w-full text-center text-3xl font-bold m-4 mt-8 px-2">
            {topData.comic?.title}
          </div>
        </div>
      </div>
    )
  );
}
