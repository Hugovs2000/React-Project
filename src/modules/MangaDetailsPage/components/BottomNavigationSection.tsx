import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { GiRead } from "react-icons/gi";
import { ChapterDetails } from "../../../models/ChapterDetails";
import { Comic } from "../../../models/Comic";
import BottomNavbar from "./BottomNavbar";
import MangaChapters from "./MangaChapters";
import MangaDetailsSection from "./MangaDetailsSection";
import RecommendedMangas from "./RecommendedMangas";

export default function BottomNavigationSection({
  topData,
  comicChaptersData,
}: {
  topData: Comic;
  comicChaptersData: ChapterDetails;
}) {
  const [active, setActive] = useState("details");

  return (
    <div className="flex w-full flex-col">
      <BottomNavbar active={active} setActive={setActive} />
      <div className="flex w-full justify-between">
        {topData?.comic?.slug && topData?.firstChap?.hid && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: topData.comic.slug,
              chapter: topData.firstChap.hid,
            }}
            className="w-fit"
          >
            <div className="mx-4 my-8 flex flex-nowrap items-center justify-around gap-1 self-start rounded-md bg-emerald-700 p-2">
              Start Reading <GiRead />
            </div>
          </Link>
        )}
      </div>
      {active === "details" && topData && (
        <MangaDetailsSection topData={topData} />
      )}
      {active === "chapters" && topData?.comic && (
        <MangaChapters
          comic={topData.comic}
          comicChaptersData={comicChaptersData}
        />
      )}
      {active === "recommended" && topData?.comic && (
        <RecommendedMangas comic={topData.comic} />
      )}
    </div>
  );
}
