import { LazyLoadImage } from "react-lazy-load-image-component";
import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function SearchCard({ comic }: { comic: Comic }) {
  return (
    comic?.md_covers?.[0]?.b2key && (
      <div
        className="relative my-4 flex min-h-fit w-full cursor-pointer flex-col items-start rounded-xl bg-cover shadow-around md:w-full md:max-w-full"
        style={{
          backgroundImage: `url(${convertToUrl(comic.md_covers[0].b2key)})`,
        }}
        key={comic.slug}
      >
        <div className="absolute min-h-full min-w-full rounded-xl bg-black/60 backdrop-blur-sm"></div>
        <div className="z-10 flex w-fit items-center justify-start md:w-full">
          <LazyLoadImage
            src={convertToUrl(comic.md_covers[0].b2key)}
            alt={comic.title ?? "Untitled Manga"}
            className="m-4 h-28 min-w-20 rounded-xl border-2 border-slate-50"
          />
          <span className="m-4 line-clamp-2 h-fit w-full text-xl font-bold text-slate-50">
            {comic.title ?? "Title not found"}
          </span>
        </div>
      </div>
    )
  );
}
