import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../shared/Logo.tsx";
import { useAuthenticationStore } from "../../state/state-service.ts";
import { isAuthenticated, logOut } from "../../utils/auth.ts";

export default function Navbar({ className }: { className: string }) {
  const user = useAuthenticationStore((state) => state.user);
  const activeRouter = useRouterState();
  const router = useRouter();
  const onBack = () => router.history.back();

  const isSearchHidden = activeRouter.location.pathname.includes("search");

  const handleLogout = () => {
    logOut(router);
  };

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
        <div className="flex items-center gap-2">
          {isAuthenticated() ? (
            <div className="flex items-center gap-2">
              <h3 className="hidden gap-0 px-2 text-slate-50 sm:block">
                {!user?.displayName
                  ? "Welcome, Reader"
                  : `Welcome, ${user.displayName}`}
              </h3>
              <button
                onClick={handleLogout}
                className="btn btn-ghost gap-0 px-2 text-slate-50"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/log-in" className="gap-0 px-2 text-emerald-600">
                Log In
              </Link>
              <Link
                to="/sign-up"
                className=" rounded-lg bg-emerald-600 px-2 py-1 text-slate-50"
              >
                Sign Up
              </Link>
            </div>
          )}
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
      </div>
    </>
  );
}
