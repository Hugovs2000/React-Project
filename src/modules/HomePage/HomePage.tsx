import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getNewUpdates, getTop } from "../../api/api-services";
import { useMangaStore } from "../../main";
import LatestUpdatesSection from "./components/LatestUpdatesSection";
import SeasonalSection from "./components/SeasonalSection";
import LatestUpdatesSkeleton from "./components/Skeletons/LatestUpdatesSkeleton";
import SeasonalSkeleton from "./components/Skeletons/SeasonalSkeleton";
import TopTenSkeleton from "./components/Skeletons/TopTenSkeleton";
import TrendingSkeleton from "./components/Skeletons/TrendingSkeleton";
import TopTenSection from "./components/TopTenSection";
import TrendingSection from "./components/TrendingSection";

export default function HomePage() {
  const lastReadPage = useMangaStore((state) => state.currentlyReading);

  const { data: topData, isLoading: loadingTopData } = useQuery({
    queryKey: [`getTopTrendingData`],
    queryFn: () => getTop(),
  });
  const { data: latestUpdatesData, isLoading: loadingLatestsUpdates } =
    useQuery({
      queryKey: [`getLatestUpdates`],
      queryFn: () => getNewUpdates(),
    });

  if (loadingTopData || loadingLatestsUpdates) {
    return (
      <div className=" bg-zinc-800 h-auto text-slate-50">
        <TrendingSkeleton />
        <LatestUpdatesSkeleton />
        <TopTenSkeleton />
        <SeasonalSkeleton />
      </div>
    );
  }

  if (topData && latestUpdatesData) {
    return (
      <div className=" bg-zinc-800 h-auto text-slate-50">
        <TrendingSection topData={topData} />
        <LatestUpdatesSection latestUpdatesData={latestUpdatesData} />
        <TopTenSection topTenData={topData} />
        <SeasonalSection seasonalData={topData} />
        <Link
          to="/read/$manga/$chapter"
          params={{
            manga: lastReadPage[0],
            chapter: lastReadPage[1],
          }}
          className="">
          <div className="">Continue</div>
        </Link>
      </div>
    );
  }

  return (
    <div className="m-8">
      Apologies, we are experiencing some issues. Please try again at another
      time
    </div>
  );
}
