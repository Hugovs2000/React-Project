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
      <div className="flex min-h-full w-80 flex-col bg-zinc-800 p-8 text-slate-50">
        <div className="mb-8 text-xl font-bold">
          Chronical <span className="text-emerald-600">Frames</span>
        </div>
        <Link to="/">
          <div className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2">
            <IoIosHome />
            Home
          </div>
        </Link>
        <div className="skeleton mt-4 h-10 w-full rounded-md bg-zinc-950"></div>
        <div className="skeleton mt-4 h-10 w-full rounded-md bg-zinc-950"></div>
        <div className="skeleton mt-4 h-10 w-full rounded-md bg-zinc-950"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <Footer padding="p-4" />
        </div>
      </div>
    </div>
  );
}
