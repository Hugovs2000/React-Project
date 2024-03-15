import { useQuery } from "@tanstack/react-query";
import { getNewUpdates, getTop } from "../../services/api-services";
import LatestUpdatesSection from "./components/LatestUpdatesSection";
import SeasonalSection from "./components/SeasonalSection";
import TopTenSection from "./components/TopTenSection";
import TrendingSection from "./components/TrendingSection";

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
      <TrendingSection topData={topData} />
      <LatestUpdatesSection latestUpdatesData={latestUpdatesData} />
      <TopTenSection topTenData={topData} />
      <SeasonalSection seasonalData={topData} />
    </div>
  );
}

export default HomePage;
