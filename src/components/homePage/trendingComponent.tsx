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

  const imgUrls: string[] =
    topData?.trending[7].slice(0, 10).map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <>
      <div>
        <h2 className="p-6 text-xl">This weeks Trending</h2>
        <div className="snap-mandatory snap-x flex px-4 pb-8 gap-4 overflow-x-scroll overflow-y-hidden">
          {topData?.trending[7].slice(0, 10).map((item, index: number) => (
            <div
              className="snap-center relative rounded-xl overflow-hidden flex flex-col min-w-fit max-w-lg md:max-w-full md:min-w-[400px] h-full bg-cover items-center cursor-pointer"
              style={{
                backgroundImage: `url(${imgUrls[index]})`,
              }}
              key={item.slug}>
              <div className="border-slate-50 backdrop-blur-[2px] border-2 rounded-xl min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/50"></div>
              <div className="z-10 flex h-full">
                <img
                  src={imgUrls[index]}
                  alt={item.md_covers[0].b2key}
                  key={item.md_covers[0].b2key}
                  className="rounded-xl border-2 border-slate-50 ml-4 mt-4 h-52"
                />
                <div className="flex flex-col p-4 gap-4 items-left justify-around text-left min-h-full">
                  <span className="text-xl flex flex-col">{item.title}</span>
                  <span className="text-sm flex flex-col gap-1">
                    Author: {comicQueries[index]?.data?.authors[0]?.name}
                    <span className="text-sm">
                      Year: {comicQueries[index]?.data?.comic.year}
                    </span>
                  </span>
                </div>
              </div>
              <div className="z-10 my-4 mx-2 flex flex-wrap gap-2 justify-center">
                {comicQueries[index]?.data?.comic.md_comic_md_genres
                  .slice(0, 5)
                  .map((genre) => (
                    <span
                      className="text-xs bg-blue-400 p-1 rounded-md"
                      key={genre.md_genres.name}>
                      {genre.md_genres.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}

export default TrendingComponent;
