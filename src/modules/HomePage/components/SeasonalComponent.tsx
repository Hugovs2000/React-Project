import { ITopTrending } from "../../../models/topTrending";
import ListSeasonalMangas from "./ListSeasonalMangas";

function SeasonalManga({ seasonalData }: { seasonalData?: ITopTrending }) {
  if (
    !(
      seasonalData?.comicsByCurrentSeason?.season ||
      seasonalData?.comicsByCurrentSeason?.data[0]
    )
  )
    return <>Not Found</>;

  const resultingSeasonString = `${seasonalData.comicsByCurrentSeason.season.charAt(0).toUpperCase() + seasonalData.comicsByCurrentSeason.season.slice(1)}`;

  const filteredComics = seasonalData.comicsByCurrentSeason.data
    .filter(
      (item) => item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key
    )
    .slice(0, 12);

  return (
    <div>
      <div className="m-6 mt-8 flex justify-between">
        <h2 className="text-xl text-slate-50">
          {resultingSeasonString} Manhwa
        </h2>
        <button className="text-blue-400">See more</button>
      </div>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box">
        {filteredComics.map((item) => (
          <ListSeasonalMangas item={item} key={item.hid} />
        ))}
      </div>
    </div>
  );
}

export default SeasonalManga;
