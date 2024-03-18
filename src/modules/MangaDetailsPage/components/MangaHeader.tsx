import { Link } from "@tanstack/react-router";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Comic } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

function MangaHeader({ topData }: { topData: Comic }) {
  return (
    topData.comic?.md_covers?.[0]?.b2key && (
      <div
        className="flex flex-col justify-center items-center bg-cover relative shadow-slate-50/30 shadow-lg"
        style={{
          backgroundImage: `url(${convertToUrl(topData.comic?.md_covers?.[0]?.b2key)})`,
        }}>
        <div className="z-[1] p-2 w-full flex justify-center items-center bg-emerald-700 rounded-b-md relative">
          <div className="absolute left-0 mx-4 h-fit">
            <Link to="/" className="h-full">
              <RiArrowGoBackLine className="scale-125" />
            </Link>
          </div>
          <div className="w-1/3 mr-2 text-center">
            {topData.comic?.last_chapter} chapters
          </div>
          <div className="w-1/3 ml-2 text-center">
            {topData.comic?.user_follow_count} followers
          </div>
        </div>
        <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className="absolute w-full h-full bg-gradient-to-t from-black/95 to-60%"></div>
        <div className="flex flex-col justify-center items-center z-[1] w-full">
          <Link to="">
            <img
              src={convertToUrl(topData.comic?.md_covers?.[0]?.b2key)}
              alt="Cover"
              className="rounded-xl border-2 border-slate-50 max-h-52 md:max-h-96 m-8 mb-2 w-fit"
            />
          </Link>
          <div className="text-xs">
            By:{" "}
            {!topData.authors?.[0]?.name
              ? "Unknown"
              : topData?.authors?.[0]?.name}
          </div>
          <div className="text-xs">Released: {topData.comic?.year}</div>
          <div className="w-full text-center text-3xl font-bold m-4 mt-8 px-2">
            {topData.comic?.title}
          </div>
        </div>
      </div>
    )
  );
}

export default MangaHeader;
