import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { GiRead } from "react-icons/gi";
import { IoCaretForward } from "react-icons/io5";
import { Comic } from "../../../models/Comic";
import { useMangaStore } from "../../../state/state-service";
import BottomNavbar from "./BottomNavbar";
import MangaChapters from "./MangaChapters";
import MangaDetailsSection from "./MangaDetailsSection";
import RecommendedMangas from "./RecommendedMangas";
import { isAuthenticated } from "../../../utils/auth";

export default function BottomNavigationSection({
  topData,
}: {
  topData: Comic;
}) {
  const [active, setActive] = useState("details");
  const currentlyReading = useMangaStore((state) => state.currentlyReading);
  const currentReadingEntry = currentlyReading.find(
    ([mangaSlug]) => mangaSlug === topData?.comic?.slug,
  );

  return (
    <div className="flex w-full flex-col">
      <BottomNavbar active={active} setActive={setActive} />
      <div className="flex w-full justify-between">
        {currentReadingEntry &&
        currentReadingEntry?.[0] !== "" &&
        currentReadingEntry?.[1] !== "" &&
        isAuthenticated() ? (
          <div className="tooltip tooltip-bottom" data-tip="Continue Reading">
            <Link
              to="/read/$manga/$chapter"
              params={{
                manga: currentReadingEntry[0],
                chapter: currentReadingEntry[1],
              }}
              className="w-fit"
            >
              <div className="mx-4 my-8 flex flex-nowrap items-center justify-around gap-1 self-start rounded-md bg-emerald-700 p-2 shadow-fab">
                Continue Reading
                <IoCaretForward className="scale-150" />
              </div>
            </Link>
          </div>
        ) : (
          topData?.comic?.slug &&
          topData?.firstChap?.hid && (
            <Link
              to="/read/$manga/$chapter"
              params={{
                manga: topData.comic.slug,
                chapter: topData.firstChap.hid,
              }}
              className="w-fit"
            >
              <div className="mx-4 my-8 flex flex-nowrap items-center justify-around gap-1 self-start rounded-md bg-emerald-700 p-2 shadow-fab">
                Start Reading <GiRead />
              </div>
            </Link>
          )
        )}
      </div>
      {active === "details" && topData && (
        <MangaDetailsSection topData={topData} />
      )}
      {active === "chapters" && topData?.comic?.hid && (
        <MangaChapters comic={topData.comic} hid={topData.comic.hid} />
      )}
      {active === "recommended" && topData?.comic && (
        <RecommendedMangas comic={topData.comic} />
      )}
    </div>
  );
}
