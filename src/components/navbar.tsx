import { Link } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ className }: { className: string }) {
  return (
    <>
      <div className={`navbar bg-zinc-900 ` + className}>
        <div className="flex-none btn btn-square btn-ghost text-slate-50">
          <RxHamburgerMenu size={25} />
        </div>
        <div className="flex-1 flex-wrap">
          <div>
            <Link to="/" className="btn btn-ghost text-2xl text-slate-50">
              Chronical <span className="text-orange-300">Frames</span>
            </Link>
          </div>
          <div className="mx-4">
            <Link
              to="/mangaDetails"
              className="btn btn-square btn-ghost text-slate-50">
              Details
            </Link>
            <Link
              to="/readManga"
              className="btn btn-square btn-ghost text-slate-50">
              Read
            </Link>
            <Link
              to="/advancedSearch"
              className="btn btn-square btn-ghost text-slate-50">
              Search
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-slate-50">
            <IoIosSearch size={25} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
