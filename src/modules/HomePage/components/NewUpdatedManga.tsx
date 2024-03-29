import { formatDistance } from "date-fns";
import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function NewUpdatedManga({ item }: { item: Comic }) {
  return (
    <div className="min-w-50 indicator">
      <span className="badge indicator-item z-20 mx-2 translate-x-8 border-slate-50 bg-emerald-700 py-3">
        <span className="text-base text-slate-50">CH-{item.chap}</span>
      </span>
      <div className="grid place-items-center">
        {item.md_comics?.md_covers?.[0].b2key && (
          <div className="relative flex h-full flex-col items-center justify-start gap-4 overflow-hidden rounded-xl shadow-around">
            <img
              src={convertToUrl(item.md_comics?.md_covers?.[0].b2key)}
              alt={item.md_comics.title}
              className=" z-10 max-h-64 max-w-48 overflow-hidden"
            />
            <div className="absolute bottom-0 z-20 flex flex-col items-center">
              <span className="z-10 mx-3 my-1 line-clamp-2 text-center text-xl font-bold hover:line-clamp-5">
                {item.md_comics.title}
              </span>
              {item.created_at && (
                <span className="m-1 text-sm">
                  {formatDistance(new Date(item.created_at), Date.now(), {
                    addSuffix: true,
                  })}
                </span>
              )}
            </div>
            <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-70%"></div>
          </div>
        )}
      </div>
    </div>
  );
}
