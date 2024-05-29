import { LazyLoadImage } from "react-lazy-load-image-component";
import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function SeasonalManga({ item }: { item: Comic }) {
  return (
    item?.md_covers?.[0].b2key && (
      <div className="flex max-w-24 cursor-pointer snap-center flex-col items-center justify-start gap-4">
        <LazyLoadImage
          src={convertToUrl(item?.md_covers?.[0].b2key)}
          alt={item.title}
          className="h-36 w-24 rounded-xl shadow-around"
        />
        <div className="flex max-w-24 flex-wrap items-center text-center">
          <span className="line-clamp-2 text-base hover:line-clamp-none">
            {item.title}
          </span>
        </div>
      </div>
    )
  );
}
