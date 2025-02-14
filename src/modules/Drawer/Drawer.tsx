import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { IoIosHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { getTop } from "../../api/api-services";
import Logo from "../../shared/Logo.tsx";
import { useMangaStore } from "../../state/state-service.ts";
import Footer from "../Footer/Footer";
import DrawerLinksSection from "./components/DrawerLinksSection.tsx";
import DrawerSkeleton from "./components/Skeletons/DrawerSkeleton";
import { isAuthenticated } from "../../utils/auth.ts";

export default function Drawer() {
  const currentlyReading = useMangaStore((state) => state.currentlyReading);

  const { data: topData, isLoading: loadingTopData } = useQuery({
    queryKey: [`getTopTrendingData`],
    queryFn: () => getTop(),
  });

  if (loadingTopData) {
    return <DrawerSkeleton />;
  }

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="flex min-h-full w-72 flex-col justify-start bg-zinc-900 p-8 pb-16 text-slate-50">
        <div className="mb-6 text-xl font-bold">
          <Logo overrideSize={true} />
        </div>
        <Link to="/">
          <div className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2">
            <IoIosHome />
            Home
          </div>
        </Link>
        <Link to="/favourites" className="my-4">
          <div className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2">
            <MdFavorite />
            Favourites
          </div>
        </Link>
        {isAuthenticated() && currentlyReading && (
          <DrawerLinksSection continueReadingData={currentlyReading} />
        )}
        {topData?.trending?.[7] && (
          <DrawerLinksSection trendingData={topData.trending[7]} />
        )}
        <div className="absolute bottom-0 left-0 w-full px-8 py-4">
          <Footer padding="p-0" />
        </div>
      </div>
    </div>
  );
}
