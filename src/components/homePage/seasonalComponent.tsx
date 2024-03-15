import { ITopTrending } from "../../models/topTrending";

function SeasonalManga({
  seasonalData,
}: {
  seasonalData: ITopTrending | undefined;
}) {
  if (
    !(
      seasonalData?.comicsByCurrentSeason?.season ||
      seasonalData?.comicsByCurrentSeason?.data[0]
    )
  )
    return <>Not Found</>;
  const imgUrls: string[] =
    seasonalData?.comicsByCurrentSeason.data
      .filter((item) => item.content_rating === "safe")
      .slice(0, 12)
      .map((item) => {
        return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
      }) || [];

  const resultingSeasonString: string = `${seasonalData.comicsByCurrentSeason.season.charAt(0).toUpperCase() + seasonalData.comicsByCurrentSeason.season.slice(1)}`;

  return (
    <div>
      <div className="m-6 mt-8 flex justify-between">
        <h2 className="text-xl text-slate-50">
          {resultingSeasonString} Manhwa
        </h2>
        <button className="text-blue-400">See more</button>
      </div>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box">
        {seasonalData.comicsByCurrentSeason.data
          .filter((item) => item.content_rating === "safe")
          .slice(0, 12)
          .map((item, index: number) => (
            <div
              className="carousel-item snap-center min-w-32 flex flex-col items-center justify-start gap-4"
              key={item.hid}>
              <img
                src={imgUrls[index]}
                alt={item.title}
                key={item.md_covers[0].b2key}
                className="rounded-xl shadow-allAround max-w-48 z-[1] max-h-[150px] w-auto"
              />
              <div className="flex text-center items-center flex-wrap max-w-32">
                <span className="text-base line-clamp-2 hover:line-clamp-none">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SeasonalManga;
