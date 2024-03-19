export default function LatestUpdatesSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="skeleton bg-zinc-900 self-start rounded-lg w-1/2 h-10 text-xl  text-center"></div>
      <div className="flex flex-nowrap py-8 gap-8 md:gap-16 overflow-x-hidden w-full">
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-40 h-52">
          <span className="skeleton bg-zinc-900 indicator-item translate-x-8 badge py-3 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-40 h-52 ">
          <span className="skeleton bg-zinc-900 indicator-item translate-x-8 badge py-3 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-40 h-52">
          <span className="skeleton bg-zinc-900 indicator-item translate-x-8 badge py-3 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-40 h-52">
          <span className="skeleton bg-zinc-900 indicator-item translate-x-8 badge py-3 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-40 h-52">
          <span className="skeleton bg-zinc-900 indicator-item translate-x-8 badge py-3 z-20 mx-2 w-10 border-none"></span>
        </div>
      </div>
    </div>
  );
}
