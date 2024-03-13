import { ITopTrending } from "../../models/topTrending";

function TopTen({ topTenData }: { topTenData: ITopTrending | undefined }) {
  const imgUrls: string[] =
    topTenData?.recentRank.slice(0, 10).map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <>
      <div>
        <h2 className="m-6 text-xl">Top 10</h2>
        <div className="snap-mandatory snap-x flex px-6 pb-8 gap-4 overflow-x-scroll overflow-y-hidden">
          {topTenData?.recentRank.slice(0, 10).map((item, index: number) => (
            <div
              className="snap-center relative rounded-xl overflow-hidden flex min-w-full md:max-w-full md:min-w-[400px] h-60 bg-cover"
              style={{
                backgroundImage: `url(${imgUrls[index]})`,
              }}
              key={item.slug}>
              <div className="border-slate-50 backdrop-blur-[2px] border-2 rounded-xl min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/50"></div>
              <img
                src={imgUrls[index]}
                alt={item.md_covers[0].b2key}
                key={item.md_covers[0].b2key}
                className="rounded-xl border-2 border-slate-50 z-10 ml-4 my-4"
              />
              <div className="flex z-10 p-4 items-center justify-center text-left">
                <span className="text-xl">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}

export default TopTen;
