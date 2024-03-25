import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { IoIosHome } from "react-icons/io";
import { getNewUpdates, getTop } from "../../api/api-services";
import Footer from "../Footer/Footer";
import ComicsList from "./components/ComicsList";
import DrawerSkeleton from "./components/Skeletons/DrawerSkeleton";

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
      <div className="p-8 w-80 min-h-full text-slate-50 bg-zinc-900 flex flex-col">
        <div className="mb-8 text-xl font-bold">
          Chronical <span className="text-emerald-600">Frames</span>
        </div>
        <Link to="/">
          <div className="bg-emerald-700 px-4 py-2 rounded-md flex items-center justify-center w-full gap-2">
            <IoIosHome />
            Home
          </div>
        </Link>
        {topData && <ComicsList topData={topData} />}
        {latestUpdatesData && (
          <ComicsList latestUpdatesData={latestUpdatesData} />
        )}
        {topData?.comicsByCurrentSeason && (
          <ComicsList seasonalData={topData.comicsByCurrentSeason} />
        )}
        <div className="absolute left-0 bottom-0 w-full">
          <Footer padding="p-8" />
        </div>
      </div>
    </div>
  );
}
