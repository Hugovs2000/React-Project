export default function LatestUpdatesSkeleton() {
  return (
    <div className="my-8 flex flex-col items-center px-8">
      <div className="skeleton h-10 w-1/2 self-start rounded-lg bg-zinc-900 text-center  text-xl"></div>
      <div className="flex w-full flex-nowrap gap-8 overflow-x-hidden py-12 md:gap-16">
        <div className="indicator skeleton h-52 min-w-72 rounded-xl bg-zinc-900">
          <span className="indicator-item skeleton z-20 h-16 w-10 -translate-y-7 rounded-xl bg-zinc-900"></span>
        </div>
        <div className="indicator skeleton h-52 min-w-72 rounded-xl bg-zinc-900">
          <span className="indicator-item skeleton z-20 h-16 w-10 -translate-y-7 rounded-xl bg-zinc-900"></span>
        </div>
        <div className="indicator skeleton h-52 min-w-72 rounded-xl bg-zinc-900">
          <span className="indicator-item skeleton z-20 h-16 w-10 -translate-y-7 rounded-xl bg-zinc-900"></span>
        </div>
        <div className="indicator skeleton h-52 min-w-72 rounded-xl bg-zinc-900">
          <span className="indicator-item skeleton z-20 h-16 w-10 -translate-y-7 rounded-xl bg-zinc-900"></span>
        </div>
        <div className="indicator skeleton h-52 min-w-72 rounded-xl bg-zinc-900">
          <span className="indicator-item skeleton z-20 h-16 w-10 -translate-y-7 rounded-xl bg-zinc-900"></span>
        </div>
      </div>
    </div>
  );
}
