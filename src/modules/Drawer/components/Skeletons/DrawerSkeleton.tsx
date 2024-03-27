import { Link } from "@tanstack/react-router";
import { IoIosHome } from "react-icons/io";
import Footer from "../../../Footer/Footer";

export default function DrawerSkeleton() {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="p-8 w-80 min-h-full text-slate-50 bg-zinc-800 flex flex-col">
        <div className="mb-8 text-xl font-bold">
          Chronical <span className="text-emerald-600">Frames</span>
        </div>
        <Link to="/">
          <div className="bg-emerald-700 px-4 py-2 rounded-md flex items-center justify-center w-full gap-2">
            <IoIosHome />
            Home
          </div>
        </Link>
        <div className="skeleton bg-zinc-950 w-full h-10 rounded-md mt-4"></div>
        <div className="skeleton bg-zinc-950 w-full h-10 rounded-md mt-4"></div>
        <div className="skeleton bg-zinc-950 w-full h-10 rounded-md mt-4"></div>
        <div className="absolute left-0 bottom-0 w-full">
          <Footer padding="p-4" />
        </div>
      </div>
    </div>
  );
}
