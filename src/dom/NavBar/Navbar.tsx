import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <div className="navbar bg-zinc-900">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <RxHamburgerMenu size={25} />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl text-slate-50">
            Chronical <span className="text-orange-300">Frames</span>
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <IoIosSearch size={25} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
