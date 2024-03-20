import { Link, useRouterState } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ className }: { className: string }) {
  const activeRouter = useRouterState();

  const isSearchHidden = activeRouter.location.pathname.includes("search");

  return (
    <>
      <div className={className}>
        <div className="flex-none btn btn-square btn-ghost text-slate-50">
          <RxHamburgerMenu size={25} />
        </div>
        <div className="flex-1 flex-wrap">
          <div>
            <Link to="/" className="btn btn-ghost text-2xl text-slate-50">
              Chronical <span className="text-emerald-600">Frames</span>
            </Link>
          </div>
        </div>
        {!isSearchHidden ? (
          <div id="search" className="flex-none">
            <Link
              to="/search"
              className="btn btn-square btn-ghost text-slate-50">
              <IoIosSearch size={25} />
            </Link>
          </div>
        ) : (
          <Link to="/" className="m-4 text-slate-50">
            <RiArrowGoBackLine className="scale-125" />
          </Link>
        )}
      </div>
    </>
  );
}

export default Navbar;
