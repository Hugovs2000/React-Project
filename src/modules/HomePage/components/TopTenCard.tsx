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
    <div className="indicator min-w-fit max-w-full cursor-pointer md:min-w-96 md:max-w-full">
      <span className="indicator-item pr-6 text-7xl font-bold text-slate-50 md:-translate-y-10 md:translate-x-12 md:text-8xl">
        {index + 1}
      </span>
      {item.md_covers?.[0].b2key && (
        <div
          className="relative flex h-60 min-w-full snap-center overflow-hidden rounded-xl bg-cover shadow-around md:min-w-96"
          style={{
            backgroundImage: `url(${convertToUrl(item.md_covers?.[0].b2key)})`,
          }}
        >
          <div className="absolute min-h-full min-w-full rounded-xl bg-black/50 backdrop-blur-sm md:min-w-full md:max-w-4xl"></div>
          <img
            src={convertToUrl(item.md_covers?.[0].b2key)}
            alt={item.title}
            key={item.md_covers?.[0].b2key}
            className="z-10 my-4 ml-4 max-w-48 rounded-xl border-2 border-slate-50"
          />
          <div className="z-10 flex max-w-56 items-center justify-center p-4 text-left">
            <span className="text-xl font-bold">{item.title}</span>
          </div>
        </div>
      )}
    </div>
  );
}
