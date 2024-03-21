export default function SeasonalSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="skeleton bg-zinc-900 self-start rounded-lg w-1/2 h-10 text-xl text-center"></div>
      <div className="flex flex-nowrap py-8 gap-4 md:gap-20 md:self-start overflow-x-hidden w-full">
        <div className="skeleton bg-zinc-900 rounded-xl min-w-32 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-32 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-32 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-32 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-32 h-52"></div>
      </div>
    </div>
  );
}
