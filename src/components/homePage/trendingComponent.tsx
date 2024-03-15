import { useQueries } from "@tanstack/react-query";
import { ITopTrending } from "../../models/topTrending";
import { getComicBySlug } from "../../services/api-services";

function TrendingComponent({ topData }: { topData: ITopTrending | undefined }) {
  const topTenTrendingData: string[] =
    topData?.trending[7].slice(0, 10).map((item) => {
      return item.slug;
    }) || [];

  const comicQueries = useQueries({
    queries: topTenTrendingData.map((comic) => {
      return {
        queryKey: ["comic", comic],
        queryFn: () => getComicBySlug(comic),
      };
    }),
  });

  if (!topData?.trending?.[7]?.[0]) return <>Not Found</>;

  if (
    !(comicQueries?.[0]?.data?.comic || comicQueries?.[0]?.data?.authors?.[0])
  )
    return <>Not Found</>;

  const imgUrls: string[] =
    topData.trending[7].slice(0, 10).map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <>
      <div>
        <h2 className="px-6 pt-8 text-xl text-slate-50">Trending This Week</h2>
        <div className="snap-mandatory snap-x flex px-4 py-8 gap-12 overflow-x-scroll overflow-y-hidden">
          {topData.trending[7].slice(0, 10).map((item, index: number) => (
            <div
              className="snap-center relative rounded-xl overflow-hidden flex flex-col min-w-fit max-w-lg md:max-w-full md:min-w-[400px] h-full bg-cover items-center cursor-pointer shadow-allAround"
              style={{
                backgroundImage: `url(${imgUrls[index]})`,
              }}
              key={item.slug}>
              <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
              <div className="z-[1] flex h-full">
                <img
                  src={imgUrls[index]}
                  alt={item.title}
                  key={item.md_covers[0].b2key}
                  className="rounded-xl border-2 max-w-48 border-slate-50 ml-4 mt-4 h-52"
                />
                <div className="flex flex-col p-4 gap-4 items-left justify-around text-left min-h-full">
                  <span className="text-xl flex flex-col font-bold">
                    {item.title}
                  </span>
                  <span className="text-sm flex flex-col gap-1">
                    Author:{" "}
                    {!comicQueries[index]?.data?.authors[0]?.name
                      ? "Unknown"
                      : comicQueries[index]?.data?.authors[0]?.name}
                    <span className="text-sm">
                      Year: {comicQueries[index].data?.comic.year}
                    </span>
                  </span>
                </div>
              </div>
              <div className="z-[1] my-4 mx-2 flex flex-wrap gap-2 justify-center">
                {comicQueries[index].data?.comic.md_comic_md_genres
                  .slice(0, 5)
                  .map((genre) => (
                    <span
                      className="text-xs bg-emerald-700 p-1 rounded-md"
                      key={genre.md_genres.name}>
                      {genre.md_genres.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingComponent;
