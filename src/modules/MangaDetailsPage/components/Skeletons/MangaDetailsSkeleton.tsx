function MangaDetailsSkeleton() {
  return (
    <div className=" bg-zinc-800 h-full flex flex-col">
      <div className="flex flex-col h-3/5 justify-start items-center bg-cover relative shadow-gray-400/30 shadow-lg">
        <div className="z-[1] p-1 w-full h-12 flex justify-around bg-gradient-to-r from-gray-700 to-gray-600 rounded-b-md">
          <div className="w-1/2 text-center"></div>
          <div className="w-1/2 text-center"></div>
        </div>
        <div className="backdrop-blur-sm min-h-fit min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className=" absolute z-[1] w-full h-full bg-gradient-to-t from-gray-700/95 to-60%"></div>
        <div className="flex flex-col justify-center items-center z-[1] w-full">
          <div className="text-xs"></div>
          <div className="text-xs"></div>
          <div className="w-full text-center text-3xl font-bold m-4 mt-8 px-2"></div>
        </div>
      </div>
      <div className="self-start bg-gradient-to-r from-gray-700 to-gray-600 w-32 h-8 rounded-md m-4 mt-8"></div>
      <div>
        <div className="flex justify-center gap-2 md:gap-4 m-4 flex-wrap">
          <div className="w-10 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-10 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-10 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-10 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-10 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col m-4 h-20 gap-2">
          <div className="w-2/5 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-4/5 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
          <div className="w-3/5 h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default MangaDetailsSkeleton;
