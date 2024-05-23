export default function MangaDetailsSkeleton({ page }: { page: number }) {
  return (
    <div className="mb-4 flex w-full flex-col items-start space-y-6 px-4 md:items-center">
      <div className="join self-center">
        <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
          ◀︎◀︎
        </button>
        <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
          ◀︎
        </button>
        <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
          Page {page}
        </button>
        <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
          ▶︎
        </button>
        <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
          ▶︎▶︎
        </button>
      </div>
      <div className="skeleton h-14 w-full rounded-md bg-zinc-900 md:w-[80%]"></div>
      <div className="skeleton h-14 w-full rounded-md bg-zinc-900 md:w-[80%]"></div>
    </div>
  );
}
