import { useState } from "react";
import { GiRead } from "react-icons/gi";
import { Comic } from "../../../models/Comic";
import BottomNavbar from "./BottomNavbar";
import MangaChapters from "./MangaChapters";
import MangaDetailsSection from "./MangaDetailsSection";
import RecommendedMangas from "./RecommendedMangas";

export default function BottomNavigationSection({
  topData,
}: {
  topData: Comic;
}) {
  const [active, setActive] = useState("details");

  return (
    <div className="flex flex-col w-full">
      <BottomNavbar active={active} setActive={setActive} />
      <button className="self-start bg-emerald-700 rounded-md p-2 mx-4 my-8 gap-1 flex flex-nowrap items-center justify-around">
        Start Reading <GiRead />
      </button>
      {active === "details" && topData && (
        <MangaDetailsSection topData={topData} />
      )}
      {active === "chapters" && topData.comic && (
        <MangaChapters comic={topData.comic} />
      )}
      {active === "recommended" && topData.comic && (
        <RecommendedMangas comic={topData.comic} />
      )}
    </div>
  );
}
