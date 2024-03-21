export default function TrendingSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="self-start skeleton bg-zinc-900 rounded-lg w-1/2 h-10 text-xl text-center"></div>
      <div className="flex flex-nowrap py-8 gap-4 overflow-x-hidden w-full">
        <div className="skeleton bg-zinc-900 rounded-xl min-w-72 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-72 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-72 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-72 h-52"></div>
        <div className="skeleton bg-zinc-900 rounded-xl min-w-72 h-52"></div>
      </div>
    </div>
  );
}
