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
    <>
      {topData?.trending?.[7] && (
        <DrawerTrendingSection trendingData={topData.trending[7]} />
      )}
      {latestUpdatesData && (
        <DrawerLatestUpdatesSection latestUpdatesData={latestUpdatesData} />
      )}
      {seasonalData && <DrawerSeasonalSection seasonalData={seasonalData} />}
    </>
  );
}
