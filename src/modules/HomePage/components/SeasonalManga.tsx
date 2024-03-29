import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function SeasonalManga({ item }: { item: Comic }) {
  return (
    item?.md_covers?.[0].b2key && (
      <div className="carousel-item snap-center min-w-32 flex flex-col items-center justify-start gap-4 cursor-pointer">
        <img
          src={convertToUrl(item?.md_covers?.[0].b2key)}
          alt={item.title}
          className="rounded-xl shadow-around max-w-48 max-h-40 w-auto"
        />
        <div className="flex text-center items-center flex-wrap max-w-32">
          <span className="text-base line-clamp-2 hover:line-clamp-none">
            {item.title}
          </span>
        </div>
      </div>
    )
  );
}
