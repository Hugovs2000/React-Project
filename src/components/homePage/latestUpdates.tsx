import { INewUpdates } from "../../models/newUpdates";
import formatDateToTime from "../../services/format-date";

function LatestUpdates({
  latestUpdatesData,
}: {
  latestUpdatesData: INewUpdates | undefined;
}) {
  const imgUrls: string[] =
    latestUpdatesData?.slice(0, 10).map((item) => {
      return (
        "https://meo3.comick.pictures/" + item.md_comics.md_covers[0].b2key
      );
    }) || [];

  return (
    <>
      <div className="overflow-x-hidden">
        <h2 className="m-6 text-xl">Latest Updates</h2>
        <div className="snap-mandatory snap-y overflow-y-scroll h-80">
          {latestUpdatesData?.slice(0, 10).map((item, index: number) => (
            <div
              className="snap-center px-6 w-full h-auto flex mb-4"
              key={item.hid}>
              <img
                src={imgUrls[index]}
                alt={item.md_comics.md_covers[0].b2key}
                key={item.md_comics.md_covers[0].b2key}
                className="rounded-xl border-2 border-slate-50 z-10 mr-6 max-w-[100px] h-auto"
              />
              <div className="flex flex-col justify-center gap-2">
                <span className="text-xl">{item.md_comics.title}</span>
                <span className="text-sm">Newest Chapter: {item.chap}</span>
                <span className="text-sm">
                  Released at: {formatDateToTime(item.created_at)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default LatestUpdates;
