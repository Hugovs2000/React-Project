import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getNewUpdates, getTop } from "../../api/api-services";
import { Route } from "../../routes/see-more.$section";
import SeeMoreCard from "./components/SeeMoreCard";
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

  if (section === "latest-updates") {
    return (
      <div className="text-slate-50 m-4">
        <h2 className="text-xl text-slate-50 mb-4">Latest Updates</h2>
        <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
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
                className="h-50 w-24 flex flex-col justify-start items-center">
                <SeeMoreCard
                  b2key={item.md_comics?.md_covers?.[0].b2key!}
                  title={item.md_comics?.title!}
                  chapNum={item.chap}
                />
              </Link>
            ))}
        </div>
      </div>
    );
  }

  if (section === "seasonal") {
    return (
      <div className="text-slate-50 m-4">
        <h2 className="text-xl text-slate-50 mb-4">
          {resultingSeasonString} Manhwa
        </h2>
        <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
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
                key={item.slug}
                className="h-50 w-24 flex flex-col justify-start items-center">
                <SeeMoreCard
                  b2key={item?.md_covers?.[0].b2key!}
                  title={item.title!}
                />
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
