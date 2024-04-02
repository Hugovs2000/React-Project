import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getNewUpdates, getTop } from "../../api/api-services";
import { Route } from "../../routes/see-more.$section.lazy";
import SeeMoreLatest from "./components/SeeMoreLatest";
import SeeMoreSeasonal from "./components/SeeMoreSeasonal";
import SeeMoreSkeleton from "./components/Skeletons/SeeMoreSkeleton";

export default function SeeMorePage() {
  const { section } = Route.useParams();

  const { data: latestUpdatesData, isLoading: loadingLatestsUpdates } =
    useQuery({
      queryKey: [`getLatestUpdates`],
      queryFn: () => getNewUpdates(),
    });
  const { data: topData, isLoading: loadingTopData } = useQuery({
    queryKey: [`getTopTrendingData`],
    queryFn: () => getTop(),
  });

  const resultingSeasonString = topData?.comicsByCurrentSeason.season
    ? `${topData.comicsByCurrentSeason.season.charAt(0).toUpperCase() + topData.comicsByCurrentSeason.season.slice(1)}`
    : "Seasonal";

  if (loadingLatestsUpdates || loadingTopData) {
    return <SeeMoreSkeleton />;
  }

  if (section === "latest-updates" && latestUpdatesData) {
    return <SeeMoreLatest latestUpdatesData={latestUpdatesData} />;
  }

  if (section === "seasonal" && topData) {
    return (
      <SeeMoreSeasonal
        resultingSeasonString={resultingSeasonString}
        topData={topData}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4">Page Not Found. Return Home</div>
      <Link to="/" className="text-blue-600 underline">
        Home
      </Link>
    </div>
  );
}
