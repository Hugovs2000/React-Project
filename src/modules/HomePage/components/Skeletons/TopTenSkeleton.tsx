export default function LatestUpdatesSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="skeleton bg-zinc-900 self-start rounded-lg w-1/2 h-10 text-xl  text-center"></div>
      <div className="flex flex-nowrap py-12 gap-8 md:gap-16 overflow-x-hidden w-full">
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-72 h-52">
          <span className="skeleton bg-zinc-900 -translate-y-7 indicator-item w-10 h-16 rounded-xl z-20"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-72 h-52">
          <span className="skeleton bg-zinc-900 -translate-y-7 indicator-item w-10 h-16 rounded-xl z-20"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-72 h-52">
          <span className="skeleton bg-zinc-900 -translate-y-7 indicator-item w-10 h-16 rounded-xl z-20"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-72 h-52">
          <span className="skeleton bg-zinc-900 -translate-y-7 indicator-item w-10 h-16 rounded-xl z-20"></span>
        </div>
        <div className="skeleton bg-zinc-900 indicator rounded-xl min-w-72 h-52">
          <span className="skeleton bg-zinc-900 -translate-y-7 indicator-item w-10 h-16 rounded-xl z-20"></span>
        </div>
      </div>
    </div>
  );
}
