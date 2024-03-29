import { Link, useRouter } from "@tanstack/react-router";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Comic } from "../../../models/Comic";
import { useMangaStore } from "../../../state/state-service";
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
      <>
        <div className="fixed z-20 w-full">
          <div className="relative flex h-10 items-center justify-center rounded-b-md bg-emerald-700">
            <div className="absolute left-0 mx-4 h-fit">
              <button
                onClick={onBack}
                className="flex items-center justify-center text-slate-50"
              >
                <RiArrowGoBackLine className="scale-125" />
              </button>
            </div>
            <div className="mr-2 w-1/3 text-center">
              {topData.comic?.last_chapter} chapters
            </div>
            <div className="ml-2 w-1/3 text-center">
              {topData.comic?.user_follow_count} followers
            </div>
            <div
              onClick={handleFavClick}
              className="absolute right-0 mx-4 flex h-fit items-center justify-center"
            >
              {isFav ? (
                <MdFavorite className="scale-125" />
              ) : (
                <MdFavoriteBorder className="scale-125" />
              )}
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center justify-center bg-cover shadow-lg shadow-slate-50/30"
          style={{
            backgroundImage: `url(${convertToUrl(topData.comic?.md_covers?.[0]?.b2key)})`,
          }}
        >
          <div className="absolute min-h-full min-w-full bg-black/60 backdrop-blur-sm md:min-w-full md:max-w-4xl"></div>
          <div className="absolute h-full w-full bg-gradient-to-t from-black/95 to-60%"></div>
          <div className="z-10 mt-12 flex w-full flex-col items-center justify-center">
            {topData.comic?.slug && topData.firstChap?.hid && (
              <Link
                to="/read/$manga/$chapter"
                params={{
                  manga: topData.comic?.slug,
                  chapter: topData.firstChap?.hid,
                }}
              >
                <img
                  src={convertToUrl(topData.comic?.md_covers?.[0]?.b2key)}
                  alt="Cover"
                  className="m-8 mb-2 max-h-52 w-fit rounded-xl border-2 border-slate-50 md:max-h-96"
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
            <div className="m-4 mt-8 w-full px-2 text-center text-3xl font-bold">
              {topData.comic?.title}
            </div>
          </div>
        </div>
      </>
    )
  );
}
