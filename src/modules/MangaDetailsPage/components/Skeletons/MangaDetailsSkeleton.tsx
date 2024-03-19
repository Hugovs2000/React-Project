function MangaDetailsSkeleton() {
  return (
    <div className="bg-zinc-800 h-full flex flex-col">
      <div className="skeleton bg-zinc-900 flex flex-col h-3/5 items-center rounded-none shadow-gray-400/30 shadow-lg"></div>
      <div className="skeleton bg-zinc-900 self-start  w-32 h-8 rounded-md m-4 mt-8"></div>
      <div className="flex justify-center gap-2 md:gap-4 m-4 flex-wrap">
        <div className="skeleton bg-zinc-900 w-10 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-10 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-10 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-10 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-10 h-5 rounded-md"></div>
      </div>
      <div className="flex flex-col m-4 h-20 gap-2">
        <div className="skeleton bg-zinc-900 w-2/5 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-4/5 h-5 rounded-md"></div>
        <div className="skeleton bg-zinc-900 w-3/5 h-5 rounded-md"></div>
      </div>
    </div>
  );
}

export default MangaDetailsSkeleton;
