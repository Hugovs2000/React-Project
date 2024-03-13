import { ITopTrending } from "../../models/topTrending";

function SeasonalManga({
  seasonalData,
}: {
  seasonalData: ITopTrending | undefined;
}) {
  const imgUrls: string[] =
    seasonalData?.comicsByCurrentSeason.data?.map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <div className="">
      <h2 className="m-6 text-xl">Seasonal Mangas</h2>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box ">
        {seasonalData?.comicsByCurrentSeason.data
          ?.slice(0, 15)
          .map((item: any, index: number) => (
            <div
              className="carousel-item snap-center flex flex-col items-center justify-start gap-4"
              key={item.hid}>
              <img
                src={imgUrls[index]}
                alt={item.md_covers[0].b2key}
                key={item.md_covers[0].b2key}
                className="rounded-xl border-2 border-slate-50 z-10 max-h-[150px] w-auto"
              />
              <div className="flex text-center items-center flex-wrap max-w-32">
                <span className="text-base">{item.title}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SeasonalManga;
