import { Link } from "@tanstack/react-router";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ChapterDetails } from "../../../models/ChapterDetails";

export default function BottomNavChaptersBar({
  manga,
  chapterData,
  isHidden,
}: {
  manga: string;
  chapterData: ChapterDetails;
  isHidden: boolean;
}) {
  return (
    <div
      className={
        isHidden
          ? "fade-out-move-down fixed -bottom-20 flex w-full items-center gap-20 p-2 font-bold md:gap-28"
          : "fade-in-move-up fixed bottom-20 flex w-full items-center gap-20 p-2 font-bold md:gap-28"
      }
    >
      <div className="flex w-1/2 justify-end">
        {chapterData?.prev?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.prev.hid,
            }}
            className="shadow-fab flex h-10 w-20 items-center justify-center gap-2 rounded-md bg-emerald-700"
          >
            <GrPrevious className="scale-125" /> Prev
          </Link>
        )}
      </div>
      <div className="flex w-1/2 justify-start">
        {chapterData?.next?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.next.hid,
            }}
            className="shadow-fab flex h-10 w-20 items-center justify-center gap-2 rounded-md bg-emerald-700"
          >
            Next <GrNext className="scale-125" />
          </Link>
        )}
      </div>
    </div>
  );
}
