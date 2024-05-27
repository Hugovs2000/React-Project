import { Link, useRouter } from "@tanstack/react-router";
import { IoHome } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Comic } from "../../../models/Comic";
import { useMangaStore } from "../../../state/state-service";
import convertToUrl from "../../../utils/convert-image-string";

export default function MangaHeader({ topData }: { topData: Comic }) {
  const router = useRouter();
  const onBack = () => {
    router.history.back();
  };

  const addFavourite = useMangaStore((state) => state.addToFavourites);
  const removeFavourite = useMangaStore((state) => state.removeFromFavourites);
  const existingFavs = useMangaStore((state) => state.favourites);

  let isFav: boolean;

  topData?.comic?.slug && existingFavs.includes(topData?.comic?.slug)
    ? (isFav = true)
    : (isFav = false);

  const handleFavClick = () => {
    topData?.comic?.slug &&
      (isFav
        ? removeFavourite(topData.comic.slug)
        : addFavourite(topData.comic.slug));
  };

  return (
    topData.comic?.md_covers?.[0]?.b2key && (
      <>
        <div className="fixed z-20 w-full">
          <div className="flex min-h-10 w-full items-center justify-between rounded-b-md bg-emerald-700">
            <div className="mx-4 flex h-fit gap-4 text-slate-50 md:gap-8">
              <div className="tooltip tooltip-right" data-tip="Go Back">
                <button
                  onClick={onBack}
                  className="flex items-center justify-center"
                  aria-label="Go Back"
                >
                  <RiArrowGoBackLine className="scale-125" />
                </button>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Go Home">
                <Link to="/" aria-label="Go Home">
                  <IoHome className="scale-125" />
                </Link>
              </div>
            </div>
            <div className="mx-2 text-center">
              {topData.comic?.last_chapter} chapters
            </div>
            <div className="mx-2 text-center">
              {topData.comic?.user_follow_count} followers
            </div>
            <div className="mx-4 flex items-center gap-4 md:gap-8">
              <div
                onClick={handleFavClick}
                className="flex h-fit items-center justify-center"
              >
                {isFav ? (
                  <div
                    className="tooltip tooltip-left"
                    data-tip="Remove from Favourites"
                  >
                    <MdFavorite className="scale-125" />
                  </div>
                ) : (
                  <div
                    className="tooltip tooltip-left"
                    data-tip="Add to Favourites"
                  >
                    <MdFavoriteBorder className="scale-125" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col items-center justify-center bg-cover shadow-lg shadow-slate-50/10"
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
                <LazyLoadImage
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
