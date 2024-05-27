import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../shared/Logo.tsx";

export default function Navbar({ className }: { className: string }) {
  const activeRouter = useRouterState();
  const router = useRouter();
  const onBack = () => router.history.back();

  const isSearchHidden = activeRouter.location.pathname.includes("search");

  return (
    <>
      <div className={className}>
        <div className="btn btn-square btn-ghost flex-none text-slate-50">
          <label htmlFor="my-drawer" className="drawer-button">
            <RxHamburgerMenu size={25} cursor={"pointer"} />
          </label>
        </div>
        <div className="flex-1 flex-wrap">
          <Link
            to="/"
            className="btn btn-ghost gap-0 px-2 text-2xl text-slate-50"
          >
            <Logo />
          </Link>
        </div>
        {!isSearchHidden ? (
          <div id="search" className="flex-none">
            <div className="tooltip tooltip-left" data-tip="Search">
              <Link
                to="/search"
                className="btn btn-square btn-ghost text-slate-50"
                aria-label="Search"
              >
                <IoIosSearch size={25} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="tooltip tooltip-left" data-tip="Go Back">
            <button
              onClick={onBack}
              className="m-4 text-slate-50"
              aria-label="Go Back"
            >
              <RiArrowGoBackLine className="scale-125" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
