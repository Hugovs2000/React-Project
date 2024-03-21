import { Link } from "@tanstack/react-router";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function ReadPageSkeleton({ manga }: { manga: string }) {
  return (
    <div className="skeleton rounded-none h-full flex flex-col relative bg-zinc-900">
      <div className="absolute left-0 m-4 h-fit">
        <Link
          to="/details/$manga"
          params={{
            manga: manga,
          }}
          className="h-full text-slate-50">
          <RiArrowGoBackLine className="scale-125" />
        </Link>
      </div>
    </div>
  );
}
