import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import NewUpdatedManga from "./NewUpdatedManga";

export default function LatestUpdatesSection({
  latestUpdatesData,
}: {
  latestUpdatesData: Comic[];
}) {
  if (
    !(
      latestUpdatesData?.[0]?.md_comics?.md_covers?.[0]?.b2key ||
      latestUpdatesData?.[0]?.md_comics?.slug ||
      latestUpdatesData?.[0]?.md_comics?.hid
    )
  )
    return <></>;

  const filteredComics = latestUpdatesData
    .filter((item) => !!item.md_comics?.md_covers?.[0]?.b2key)
    .slice(0, 15);

  return (
    <div>
      <div className="m-6 mb-2 flex justify-between">
        <h2 className=" text-xl text-slate-50">Latest Updates</h2>
        <Link
          to="/see-more/$section"
          params={{
            section: "latest-updates",
          }}
        >
          <div className="text-blue-400">See more</div>
        </Link>
      </div>
      <div className="carousel carousel-center max-w-full space-x-12 rounded-box p-8">
        {filteredComics?.map(
          (item) =>
            item.md_comics?.slug &&
            item.hid && (
              <Link
                to="/read/$manga/$chapter"
                params={{
                  manga: item.md_comics?.slug,
                  chapter: item.hid,
                }}
                key={item.md_comics?.slug}
                className="carousel-item min-h-full cursor-pointer snap-center"
              >
                <div className="h-full min-w-40">
                  <NewUpdatedManga item={item} key={item.hid} />
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
