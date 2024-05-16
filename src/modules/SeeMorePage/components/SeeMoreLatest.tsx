import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import SeeMoreCard from "./SeeMoreCard";

export default function SeeMoreLatest({
  latestUpdatesData,
}: {
  latestUpdatesData: Comic[];
}) {
  return (
    <div className="m-8 text-slate-50">
      <h2 className="my-8 text-xl text-slate-50">Latest Updates</h2>
      <div className="flex flex-wrap justify-center gap-6 md:justify-start md:gap-10">
        {latestUpdatesData
          ?.filter((item) => !!item.md_comics?.md_covers?.[0]?.b2key)
          .map(
            (item) =>
              item.hid &&
              item.md_comics?.slug &&
              item.md_comics?.md_covers?.[0]?.b2key &&
              item.md_comics?.title && (
                <Link
                  to="/read/$manga/$chapter"
                  params={{
                    manga: item.md_comics.slug,
                    chapter: item.hid,
                  }}
                  key={item.md_comics?.slug}
                  className="h-50 flex w-24 flex-col items-center justify-start"
                >
                  <SeeMoreCard
                    b2key={item.md_comics.md_covers[0].b2key}
                    title={item.md_comics.title}
                    chapNum={item.chap}
                  />
                </Link>
              ),
          )}
      </div>
    </div>
  );
}
