import { useQuery } from "@tanstack/react-query";
import { getNewUpdates, getTop } from "../../services/api-services";
import LatestUpdates from "./components/LatestUpdates";
import SeasonalManga from "./components/SeasonalComponent";
import TopTen from "./components/TopTenComponent";
import TrendingComponent from "./components/TrendingComponent";

function HomePage() {
  const { data: topData } = useQuery({
    queryKey: [`getTopTrendingData`],
    queryFn: () => getTop(),
  });
  const { data: latestUpdatesData } = useQuery({
    queryKey: [`getLatestUpdates`],
    queryFn: () => getNewUpdates(),
  });

  return (
    <div className=" bg-zinc-800 h-auto text-slate-50">
      <TrendingComponent topData={topData} />
      <LatestUpdates latestUpdatesData={latestUpdatesData} />
      <TopTen topTenData={topData} />
      <SeasonalManga seasonalData={topData} />
    </div>
  );
}

export default HomePage;
