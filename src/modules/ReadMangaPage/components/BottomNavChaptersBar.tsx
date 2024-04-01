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
    <div className="fixed bottom-2 flex w-full items-center gap-20 p-2 font-bold md:gap-28">
      <div className="flex w-1/2 justify-end">
        {chapterData?.prev?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.prev.hid,
            }}
            className="flex h-10 w-20 items-center justify-center gap-2 rounded-md bg-emerald-700"
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
            className="flex h-10 w-20 items-center justify-center gap-2 rounded-md bg-emerald-700"
          >
            Next <GrNext className="scale-125" />
          </Link>
        )}
      </div>
    </div>
  );
}
