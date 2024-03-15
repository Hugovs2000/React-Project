import { useQueries } from "@tanstack/react-query";
import { ITopTrending } from "../../../models/topTrending";
import { getComicBySlug } from "../../../services/api-services";
import TrendingCard from "./TrendingCard";

function TrendingSection({ topData }: { topData?: ITopTrending }) {
  const filteredComics = topData?.trending[7]
    .filter((item) => !!item?.md_covers?.[0]?.b2key)
    .slice(0, 10);

  const comicQueries = useQueries({
    queries:
      filteredComics?.map((comic) => {
        return {
          queryKey: ["comic", comic.slug],
          queryFn: () => getComicBySlug(comic.slug),
        };
      }) ?? [],
  });

  if (
    !(
      topData?.trending?.[7] ||
      comicQueries?.[0]?.data?.comic ||
      comicQueries?.[0]?.data?.authors?.[0]
    )
  )
    return <div>Not Found</div>;

  return (
    <div className="mb-8">
      <h2 className="px-6 pt-8 text-xl text-slate-50">Trending This Week</h2>
      <div className="snap-mandatory snap-x flex px-4 py-8 gap-12 overflow-x-scroll overflow-y-hidden">
        {filteredComics?.map((item, index: number) => (
          <TrendingCard
            item={item}
            index={index}
            comicQueries={comicQueries}
            key={item.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
