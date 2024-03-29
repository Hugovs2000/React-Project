export default function MangaDetailsSkeleton() {
  return (
    <div className="flex h-full flex-col bg-zinc-800">
      <div className="skeleton flex h-3/5 flex-col items-center rounded-none bg-zinc-900 shadow-lg shadow-gray-400/30"></div>
      <div className="skeleton m-4 mt-8  h-8 w-32 self-start rounded-md bg-zinc-900"></div>
      <div className="m-4 flex flex-wrap justify-center gap-2 md:gap-4">
        <div className="skeleton h-5 w-10 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-10 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-10 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-10 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-10 rounded-md bg-zinc-900"></div>
      </div>
      <div className="m-4 flex h-20 flex-col gap-2">
        <div className="skeleton h-5 w-2/5 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-4/5 rounded-md bg-zinc-900"></div>
        <div className="skeleton h-5 w-3/5 rounded-md bg-zinc-900"></div>
      </div>
    </div>
  );
}
