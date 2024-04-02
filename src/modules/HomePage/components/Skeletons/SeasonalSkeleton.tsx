export default function SeasonalSkeleton() {
  return (
    <div className="my-8 flex flex-col items-center px-8">
      <div className="skeleton h-10 w-1/2 self-start rounded-lg bg-zinc-900 text-center text-xl"></div>
      <div className="flex w-full flex-nowrap gap-4 overflow-x-hidden py-8 md:gap-20 md:self-start">
        <div className="skeleton h-52 min-w-32 rounded-xl bg-zinc-900"></div>
        <div className="skeleton h-52 min-w-32 rounded-xl bg-zinc-900"></div>
        <div className="skeleton h-52 min-w-32 rounded-xl bg-zinc-900"></div>
        <div className="skeleton h-52 min-w-32 rounded-xl bg-zinc-900"></div>
        <div className="skeleton h-52 min-w-32 rounded-xl bg-zinc-900"></div>
      </div>
    </div>
  );
}
