import { useQueries } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicBySlug } from "../../api/api-services";
import { useMangaStore } from "../../state/state-service";
import SeeMoreCard from "../SeeMorePage/components/SeeMoreCard";
import SeeMoreSkeleton from "../SeeMorePage/components/Skeletons/SeeMoreSkeleton";

export default function FavouritesPage() {
  const existingFavs = useMangaStore((state) => state.favourites);

  const comicQueries = useQueries({
    queries: existingFavs
      ? existingFavs.map((slug) => {
          return {
            queryKey: ["comic", slug],
            queryFn: () => getComicBySlug(slug),
          };
        })
      : [],
  });

  if (comicQueries.some((comic) => comic.isLoading)) {
    return <SeeMoreSkeleton />;
  }

  return (
    <div className="m-8 text-slate-50">
      {existingFavs.length > 0 ? (
        <>
          <h2 className="my-8 text-xl text-slate-50">Favourites</h2>
          <div className="flex flex-wrap justify-center gap-6 md:justify-start md:gap-10">
            {comicQueries.map(
              (comic) =>
                comic.data?.comic?.slug &&
                comic.data?.comic?.md_covers?.[0]?.b2key &&
                comic.data?.comic?.title && (
                  <Link
                    to="/details/$manga"
                    params={{
                      manga: comic.data.comic.slug,
                    }}
                    key={comic.data.comic.slug}
                    className="h-50 flex w-24 flex-col items-center justify-start"
                  >
                    <SeeMoreCard
                      b2key={comic.data.comic.md_covers[0].b2key}
                      title={comic.data.comic.title}
                    />
                  </Link>
                ),
            )}
          </div>
        </>
      ) : (
        <h2 className="mb-4 text-xl text-slate-50">No Favourites</h2>
      )}
    </div>
  );
}
