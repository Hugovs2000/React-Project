import { ITopTrending } from "../../models/topTrending";

function TopTen({ topTenData }: { topTenData: ITopTrending | undefined }) {
  if (!topTenData?.recentRank?.[0]) return <>Not Found</>;
  const imgUrls: string[] =
    topTenData?.recentRank.slice(0, 10).map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <>
      <div>
        <h2 className="mx-6 mt-8 text-xl text-slate-50">Top 10</h2>
        <div className="snap-mandatory snap-x flex px-8 py-8 gap-12 overflow-x-scroll overflow-y-hidden">
          {topTenData.recentRank.slice(0, 10).map((item, index: number) => (
            <div
              className="indicator min-w-fit md:max-w-full md:min-w-[400px]"
              key={item.slug}>
              <span className="indicator-item md:-translate-y-10 md:translate-x-12 pr-6 text-slate-50 font-bold text-7xl md:text-8xl">
                {index + 1}
              </span>
              <div
                className="snap-center shadow-allAround relative rounded-xl overflow-hidden flex h-60 bg-cover min-w-full md:min-w-[400px]"
                style={{
                  backgroundImage: `url(${imgUrls[index]})`,
                }}>
                <div className=" backdrop-blur-[2px] rounded-xl min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/50"></div>
                <img
                  src={imgUrls[index]}
                  alt={item.title}
                  key={item.md_covers[0].b2key}
                  className="rounded-xl border-2 max-w-48 border-slate-50 z-[1] ml-4 my-4"
                />
                <div className="flex z-[1] p-4 items-center justify-center text-left">
                  <span className="text-xl font-bold">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopTen;
