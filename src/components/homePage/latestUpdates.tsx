import { INewUpdates } from "../../models/newUpdates";
import formatDateToTime from "../../services/format-date";

function LatestUpdates({
  latestUpdatesData,
}: {
  latestUpdatesData: INewUpdates | undefined;
}) {
  if (!latestUpdatesData) return <>Not Found</>;
  const imgUrls: string[] =
    latestUpdatesData?.slice(0, 15).map((item) => {
      return (
        "https://meo3.comick.pictures/" + item.md_comics.md_covers[0].b2key
      );
    }) || [];

  return (
    <div>
      <div className="m-6 flex justify-between">
        <h2 className=" text-xl text-slate-50">Latest Updates</h2>
        <button className="text-blue-400">See more</button>
      </div>
      <div className="carousel carousel-center max-w-full p-8 space-x-12 rounded-box">
        {latestUpdatesData.slice(0, 15).map((item, index: number) => (
          <div className="carousel-item snap-center" key={item.hid}>
            <div className="indicator">
              <span className="indicator-item translate-x-8 badge py-3 border-slate-50 bg-emerald-700 z-50 mx-2">
                <span className="text-base text-slate-50">CH-{item.chap}</span>
              </span>
              <div className="grid place-items-center">
                <div className="overflow-hidden h-full rounded-xl shadow-allAround flex flex-col items-center justify-start gap-4 relative">
                  <img
                    src={imgUrls[index]}
                    alt={item.md_comics.title}
                    key={item.md_comics.md_covers[0].b2key}
                    className=" z-10 max-h-[250px] max-w-48 overflow-hidden"
                  />
                  <div className=" absolute z-20 flex flex-col items-center  bottom-0">
                    <span className="text-xl font-bold z-10 text-center my-1 mx-3 line-clamp-2 hover:line-clamp-5">
                      {item.md_comics.title}
                    </span>
                    <span className="text-sm m-1">
                      {formatDateToTime(item.created_at)}
                    </span>
                  </div>
                  <div className=" absolute z-10 w-full h-full bg-gradient-to-t from-black to-70%"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestUpdates;
