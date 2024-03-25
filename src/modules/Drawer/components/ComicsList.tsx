import { Comic } from "../../../models/Comic";
import { TopComics } from "../../../models/TopComics";
import DrawerLatestUpdatesSection from "./DrawerLatestUpdatesSection";
import DrawerSeasonalSection from "./DrawerSeasonalSection";
import DrawerTrendingSection from "./DrawerTrendingSection";

export default function ComicsList({
  topData,
  latestUpdatesData,
  seasonalData,
}: {
  topData?: TopComics;
  latestUpdatesData?: Comic[];
  seasonalData?: Comic;
}) {
  return (
    <ul className="mt-4 mb-2 text-emerald-600 text-lg">
      {topData?.trending?.[7] && (
        <DrawerTrendingSection trendingData={topData.trending?.[7]} />
      )}
      {latestUpdatesData && (
        <DrawerLatestUpdatesSection latestUpdatesData={latestUpdatesData} />
      )}
      {seasonalData && <DrawerSeasonalSection seasonalData={seasonalData} />}
    </ul>
  );
}
