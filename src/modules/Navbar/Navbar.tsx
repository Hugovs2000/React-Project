import { Link } from "@tanstack/react-router";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ className }: { className: string }) {
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
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-slate-50">
            <IoIosSearch size={25} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
