import { useQueries } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicBySlug } from "../../../api/api-services";
import { TopComics } from "../../../models/TopComics";
import TrendingSkeleton from "./Skeletons/TrendingSkeleton";
import TrendingCard from "./TrendingCard";

export default function TrendingSection({ topData }: { topData: TopComics }) {
  const filteredComics = topData?.trending[7]
    .filter((item) => !!item.md_covers?.[0]?.b2key && !!item.slug)
    .slice(0, 10);

  const comicQueries = useQueries({
    queries:
      filteredComics.map((comic) => {
        return {
          queryKey: ["comic", comic.slug],
          queryFn: () => getComicBySlug(comic?.slug ?? ""),
        };
      }) ?? [],
  });

  if (comicQueries.some((comic) => comic.isLoading)) {
    return <TrendingSkeleton />;
  }

  if (
    !topData?.trending?.[7] ||
    !(comicQueries?.[0]?.data?.comic || comicQueries?.[0]?.data?.authors?.[0])
  )
    return <></>;

  return (
    <div className="mb-8">
      <h2 className="px-6 pt-8 text-xl text-slate-50">Trending This Week</h2>
      <div className="flex snap-x snap-mandatory gap-12 overflow-y-hidden overflow-x-scroll px-4 py-8">
        {filteredComics?.map(
          (item, index: number) =>
            item.slug && (
              <Link
                to="/details/$manga"
                params={{
                  manga: item.slug,
                }}
                key={item.slug}
                className="min-w-fit md:min-w-96"
              >
                <TrendingCard
                  item={item}
                  index={index}
                  comicQueries={comicQueries}
                />
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
