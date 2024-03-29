import { useQueries } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicBySlug } from "../../api/api-services";
import { useMangaStore } from "../../state/state-service";
import SeeMoreCard from "../SeeMorePage/components/SeeMoreCard";
import SeeMoreSkeleton from "../SeeMorePage/components/Skeletons/SeeMoreSkeleton";

export default function FavouritesPage() {
  const existingFavs = useMangaStore((state) => state.favourites);

  const comicQueries = useQueries({
    queries:
      existingFavs.map((slug) => {
        return {
          queryKey: ["comic", slug],
          queryFn: () => getComicBySlug(slug ?? ""),
        };
      }) ?? [],
  });

  if (comicQueries.some((comic) => comic.isLoading)) {
    return <SeeMoreSkeleton />;
  }

  return (
    <div className="text-slate-50 m-8">
      {existingFavs.length > 0 ? (
        <h2 className="text-xl text-slate-50 my-8">Favourites</h2>
      ) : (
        <h2 className="text-xl text-slate-50 mb-4">No Favourites</h2>
      )}
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
        {comicQueries.map(
          (comic) =>
            comic.data?.comic?.slug &&
            comic.data?.comic?.md_covers?.[0].b2key &&
            comic.data?.comic?.title && (
              <Link
                to="/details/$manga"
                params={{
                  manga: comic.data.comic.slug,
                }}
                key={comic.data.comic.slug}
                className="h-50 w-24 flex flex-col justify-start items-center">
                <SeeMoreCard
                  b2key={comic.data.comic.md_covers[0].b2key}
                  title={comic.data.comic.title}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
}
