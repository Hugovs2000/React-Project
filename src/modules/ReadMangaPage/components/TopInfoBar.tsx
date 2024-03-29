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
    <div className="fixed top-16 z-20 flex h-10 w-full items-center rounded-b-md bg-emerald-700 p-2">
      <div className="absolute left-0 mx-4 h-fit">
        <Link
          to="/details/$manga"
          params={{
            manga: manga,
          }}
          className="h-full"
        >
          <RiArrowGoBackLine className="scale-125" />
        </Link>
      </div>
      <div className="flex w-full items-center justify-center gap-8">
        <div className="ml-2 max-w-40 overflow-hidden text-ellipsis text-nowrap md:max-w-96">
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
