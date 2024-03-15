import { INewUpdates } from "../../../models/newUpdates";
import NewUpdatedManga from "./NewUpdatedManga";

function LatestUpdatesSection({
  latestUpdatesData,
}: {
  latestUpdatesData?: INewUpdates;
}) {
  if (!latestUpdatesData) return <>Not Found</>;

  const filteredComics = latestUpdatesData
    .filter((item) => !!item.md_comics?.md_covers?.[0]?.b2key)
    .slice(0, 15);

  return (
    <div>
      <div className="m-6 mb-2 flex justify-between">
        <h2 className=" text-xl text-slate-50">Latest Updates</h2>
        <button className="text-blue-400">See more</button>
      </div>
      <div className="carousel carousel-center max-w-full p-8 space-x-12 rounded-box">
        {filteredComics.map((item) => (
          <NewUpdatedManga item={item} key={item.hid} />
        ))}
      </div>
    </div>
  );
}

export default LatestUpdatesSection;
