import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function SearchCard({ comic }: { comic: Comic }) {
  return (
    comic.md_covers?.[0].b2key && (
      <div
        className="relative rounded-xl flex flex-col w-80 md:max-w-96 min-h-fit bg-cover items-start cursor-pointer shadow-around"
        style={{
          backgroundImage: `url(${convertToUrl(comic.md_covers?.[0].b2key)})`,
        }}
        key={comic.slug}>
        <div className="backdrop-blur-sm rounded-xl min-h-full min-w-full absolute bg-black/60"></div>
        <div className="z-10 flex justify-start items-center w-fit">
          <img
            src={convertToUrl(comic.md_covers?.[0].b2key)}
            alt={comic.title}
            className="rounded-xl border-2 max-w-20 border-slate-50 m-4 h-28"
          />
          <span className="text-xl h-fit w-full m-4 font-bold text-slate-50 line-clamp-2">
            {comic.title}
          </span>
        </div>
      </div>
    )
  );
}
