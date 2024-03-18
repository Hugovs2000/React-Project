import { Link } from "@tanstack/react-router";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function ReadPageSkeleton({ manga }: { manga: string }) {
  return (
    <>
      <div className="h-full bg-gradient-to-t from-gray-900 to-gray-800 flex flex-col">
        <div className="z-[1] h-10 fixed top-16 p-2 w-full flex justify-center gap-8 items-center bg-gradient-to-r from-gray-700 to-gray-600 rounded-b-md">
          <div className="absolute left-0 mx-4 h-fit">
            <Link
              to="/details/$manga"
              params={{
                manga: manga,
              }}
              className="h-full text-slate-50">
              <RiArrowGoBackLine className="scale-125" />
            </Link>
          </div>
          <div className="text-lg font-extrabold text-slate-50"></div>
        </div>
      </div>
      <div className="z-[1] h-10 fixed bottom-0 p-2 w-full flex gap-10 md:gap-28 items-center bg-gradient-to-r from-gray-700 to-gray-600 rounded-t-md"></div>
    </>
  );
}
