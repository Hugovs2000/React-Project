import { useQuery } from "@tanstack/react-query";
import { getNewUpdates, getTop } from "../../services/api-services";
import LatestUpdates from "./latestUpdates";
import SeasonalManga from "./seasonalComponent";
import TopTen from "./topTenComponent";
import TrendingComponent from "./trendingComponent";

function HomeComponent() {
  const { data: topData } = useQuery({
    queryKey: [`getTopTrendingData`],
    queryFn: () => getTop(),
  });
  const { data: latestUpdatesData } = useQuery({
    queryKey: [`getLatestUpdates`],
    queryFn: () => getNewUpdates(),
  });

  return (
    <>
      <div className=" bg-zinc-800 h-auto text-slate-50">
        <TrendingComponent topData={topData} />
        <LatestUpdates latestUpdatesData={latestUpdatesData} />
        <TopTen topTenData={topData} />
        <SeasonalManga seasonalData={topData} />
      </div>
    </>
  );
}

export default HomeComponent;
