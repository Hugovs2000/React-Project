import { Link } from "@tanstack/react-router";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ChapterDetails } from "../../../models/ChapterDetails";

export default function BottomNavChaptersBar({
  manga,
  chapterData,
}: {
  manga: string;
  chapterData: ChapterDetails;
}) {
  return (
    <div className="h-10 fixed bottom-0 p-2 w-full flex gap-10 md:gap-28 items-center bg-emerald-700 rounded-t-md">
      <div className="w-1/2 flex justify-end">
        {chapterData?.prev?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.prev.hid,
            }}
            className="max-w-1/2 flex justify-end items-center pr-8 gap-2">
            <GrPrevious /> Prev
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-start">
        {chapterData?.next?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.next.hid,
            }}
            className="max-w-1/2 flex justify-start items-center pl-8 gap-2">
            Next <GrNext />
          </Link>
        )}
      </div>
    </div>
  );
}
