import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getNewUpdates, getTop } from "../../api/api-services";
import { Route } from "../../routes/see-more.$section";
import NewUpdatedManga from "../HomePage/components/NewUpdatedManga";
import SeasonalManga from "../HomePage/components/SeasonalManga";

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
    return <>...Loading</>;
  }

  if (section === "latest-updates") {
    return (
      <div className="text-slate-50 m-8">
        <h2 className="text-xl text-slate-50 mb-8">Latest Updates</h2>
        <div className="flex flex-wrap gap-x-10 gap-y-8 max-h-full max-w-full">
          {latestUpdatesData
            ?.filter((item) => !!item.md_comics?.md_covers?.[0]?.b2key)
            .map((item) => (
              <Link
                to="/read/$manga/$chapter"
                params={{
                  manga: item.md_comics?.slug!,
                  chapter: item.hid!,
                }}
                key={item.md_comics?.slug}
                className="min-h-full">
                <NewUpdatedManga item={item} key={item.hid} />
              </Link>
            ))}
        </div>
      </div>
    );
  }

  if (section === "seasonal") {
    return (
      <div className="text-slate-50 m-8">
        <h2 className="text-xl text-slate-50 mb-8">
          {resultingSeasonString} Manhwa
        </h2>
        <div className="flex flex-wrap gap-x-10 gap-y-8 max-h-full max-w-full">
          {topData?.comicsByCurrentSeason.data
            ?.filter(
              (item) =>
                item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key
            )
            .map((item) => (
              <Link
                to="/details/$manga"
                params={{
                  manga: item.slug!,
                }}
                key={item.slug}>
                <SeasonalManga item={item} />
              </Link>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-4">Page Not Found. Return Home</div>
      <Link to="/" className="underline text-blue-600">
        Home
      </Link>
    </div>
  );
}
