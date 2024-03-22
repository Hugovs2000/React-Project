import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function TopTenCard({
  item,
  index,
}: {
  item: Comic;
  index: number;
}) {
  return (
    <div className="indicator min-w-fit max-w-full md:max-w-full md:min-w-96 cursor-pointer">
      <span className="indicator-item md:-translate-y-10 md:translate-x-12 pr-6 text-slate-50 font-bold text-7xl md:text-8xl">
        {index + 1}
      </span>
      {item.md_covers?.[0].b2key && (
        <div
          className="snap-center shadow-around relative rounded-xl overflow-hidden flex h-60 bg-cover min-w-full md:min-w-96"
          style={{
            backgroundImage: `url(${convertToUrl(item.md_covers?.[0].b2key)})`,
          }}>
          <div className="backdrop-blur-sm rounded-xl min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/50"></div>
          <img
            src={convertToUrl(item.md_covers?.[0].b2key)}
            alt={item.title}
            key={item.md_covers?.[0].b2key}
            className="rounded-xl border-2 max-w-48 border-slate-50 z-10 ml-4 my-4"
          />
          <div className="flex z-10 max-w-56 p-4 items-center justify-center text-left">
            <span className="text-xl font-bold">{item.title}</span>
          </div>
        </div>
      )}
    </div>
  );
}
