import { Link } from "@tanstack/react-router";
import { RiArrowGoBackLine } from "react-icons/ri";
import { ChapterDetails } from "../../../models/ChapterDetails";

export default function TopInfoBar({
  manga,
  chapterData,
}: {
  manga: string;
  chapterData: ChapterDetails;
}) {
  return (
    <div className="h-10 fixed top-16 p-2 w-full flex items-center bg-emerald-700 rounded-b-md">
      <div className="absolute left-0 mx-4 h-fit">
        <Link
          to="/details/$manga"
          params={{
            manga: manga,
          }}
          className="h-full">
          <RiArrowGoBackLine className="scale-125" />
        </Link>
      </div>
      <div className="w-full flex justify-center gap-8 items-center">
        <div className="ml-2 text-ellipsis text-nowrap overflow-hidden max-w-40 md:max-w-96">
          {chapterData?.chapter?.md_comics?.title}
        </div>
        {chapterData?.chapter?.chap && (
          <div className=" text-center ">
            Chapter {chapterData.chapter.chap}
          </div>
        )}
      </div>
    </div>
  );
}
