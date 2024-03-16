export default function TrendingSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="self-start rounded-lg w-1/2 h-10 text-xl bg-gradient-to-r from-gray-700 to-gray-600 text-center"></div>
      <div className="flex flex-nowrap py-8 gap-4 overflow-x-scroll max-w-full">
        <div className="rounded-xl min-w-72 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-72 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-72 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-72 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-72 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
      </div>
    </div>
  );
}
