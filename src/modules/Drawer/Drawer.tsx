import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { IoIosHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { getNewUpdates, getTop } from "../../api/api-services";
import Footer from "../Footer/Footer";
import DrawerLatestUpdatesSection from "./components/DrawerLatestUpdatesSection";
import DrawerSeasonalSection from "./components/DrawerSeasonalSection";
import DrawerTrendingSection from "./components/DrawerTrendingSection";
import DrawerSkeleton from "./components/Skeletons/DrawerSkeleton";
import Logo from "../../shared/Logo.tsx";

export default function Drawer() {
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
    return <DrawerSkeleton />;
  }

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="flex min-h-full w-80 flex-col justify-between bg-zinc-900 p-8 text-slate-50">
        <div className="mb-8 text-xl font-bold">
          <Logo />
        </div>
        <Link to="/">
          <div className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2">
            <IoIosHome />
            Home
          </div>
        </Link>
        {topData?.trending?.[7] && (
          <DrawerTrendingSection trendingData={topData.trending[7]} />
        )}
        {latestUpdatesData && (
          <DrawerLatestUpdatesSection latestUpdatesData={latestUpdatesData} />
        )}
        {topData?.comicsByCurrentSeason && (
          <DrawerSeasonalSection seasonalData={topData.comicsByCurrentSeason} />
        )}
        <Link to="/favourites" className="my-4">
          <div className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2">
            <MdFavorite />
            Favourites
          </div>
        </Link>
        <div className="w-full">
          <Footer padding="p-0" />
        </div>
      </div>
    </div>
  );
}
