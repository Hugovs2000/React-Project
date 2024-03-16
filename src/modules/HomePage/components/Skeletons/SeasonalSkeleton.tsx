export default function SeasonalSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="self-start rounded-lg w-1/2 h-10 text-xl bg-gradient-to-r from-gray-700 to-gray-600 text-center"></div>
      <div className="flex flex-nowrap py-8 gap-4 md:gap-20 md:self-start overflow-x-scroll max-w-full">
        <div className="rounded-xl min-w-32 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-32 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-32 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-32 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
        <div className="rounded-xl min-w-32 h-52 bg-gradient-to-r from-gray-700 to-gray-600"></div>
      </div>
    </div>
  );
}
