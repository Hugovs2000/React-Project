import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import SeeMoreCard from "./SeeMoreCard";

export default function SeeMoreLatest({
  latestUpdatesData,
}: {
  latestUpdatesData: Comic[];
}) {
  return (
    <div className="text-slate-50 m-4">
      <h2 className="text-xl text-slate-50 mb-4">Latest Updates</h2>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
        {latestUpdatesData
          ?.filter((item) => !!item.md_comics?.md_covers?.[0]?.b2key)
          .map((item) => (
            <Link
              to="/read/$manga/$chapter"
              params={{
                manga: item.md_comics?.slug!,
                chapter: item.hid!,
              }}
              key={item.md_comics?.slug}
              className="h-50 w-24 flex flex-col justify-start items-center">
              <SeeMoreCard
                b2key={item.md_comics?.md_covers?.[0].b2key!}
                title={item.md_comics?.title!}
                chapNum={item.chap}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
