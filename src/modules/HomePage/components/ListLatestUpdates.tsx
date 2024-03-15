import { NewUpdates } from "../../../models/newUpdates";
import convertToUrl from "../../../services/convert-image-string";
import formatDateToTime from "../../../services/format-date";

function ListLatestUpdates({ item }: { item: NewUpdates }) {
  return (
    <div className="carousel-item snap-center">
      <div className="indicator">
        <span className="indicator-item translate-x-8 badge py-3 border-slate-50 bg-emerald-700 z-20 mx-2">
          <span className="text-base text-slate-50">CH-{item.chap}</span>
        </span>
        <div className="grid place-items-center">
          <div className="overflow-hidden h-full rounded-xl shadow-around flex flex-col items-center justify-start gap-4 relative">
            <img
              src={convertToUrl(item.md_comics.md_covers[0].b2key)}
              alt={item.md_comics.title}
              className=" z-10 max-h-64 max-w-48 overflow-hidden"
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
  );
}

export default ListLatestUpdates;
