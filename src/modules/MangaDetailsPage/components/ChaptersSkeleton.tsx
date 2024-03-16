export default function ChaptersSkeleton() {
  return (
    <>
      <button className="self-start bg-gray-400 w-20 h-6 rounded-md p-2 m-4 gap-1 flex flex-nowrap items-center justify-around"></button>
      <div className="flex flex-wrap gap-4 justify-center max-w-full m-4 space-x-6">
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
        <div className="w-10 h-5 bg-gray-500 rounded-md"></div>
      </div>
    </>
  );
}
