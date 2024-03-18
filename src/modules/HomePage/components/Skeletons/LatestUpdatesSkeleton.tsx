export default function LatestUpdatesSkeleton() {
  return (
    <div className="my-8 px-8 flex flex-col items-center">
      <div className="self-start rounded-lg w-1/2 h-10 text-xl bg-gradient-to-r from-gray-700 to-gray-600 text-center"></div>
      <div className="flex flex-nowrap py-8 gap-8 md:gap-16 overflow-x-scroll max-w-full">
        <div className="indicator rounded-xl min-w-40 h-52 bg-gradient-to-r from-gray-700 to-gray-600">
          <span className="indicator-item translate-x-8 badge py-3  bg-gradient-to-r from-gray-700 to-gray-600 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="indicator rounded-xl min-w-40 h-52 bg-gradient-to-r from-gray-700 to-gray-600">
          <span className="indicator-item translate-x-8 badge py-3  bg-gradient-to-r from-gray-700 to-gray-600 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="indicator rounded-xl min-w-40 h-52 bg-gradient-to-r from-gray-700 to-gray-600">
          <span className="indicator-item translate-x-8 badge py-3  bg-gradient-to-r from-gray-700 to-gray-600 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="indicator rounded-xl min-w-40 h-52 bg-gradient-to-r from-gray-700 to-gray-600">
          <span className="indicator-item translate-x-8 badge py-3  bg-gradient-to-r from-gray-700 to-gray-600 z-20 mx-2 w-10 border-none"></span>
        </div>
        <div className="indicator rounded-xl min-w-40 h-52 bg-gradient-to-r from-gray-700 to-gray-600">
          <span className="indicator-item translate-x-8 badge py-3  bg-gradient-to-r from-gray-700 to-gray-600 z-20 mx-2 w-10 border-none"></span>
        </div>
      </div>
    </div>
  );
}
