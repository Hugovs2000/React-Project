import { useState } from "react";
import { GiRead } from "react-icons/gi";
import { IComic } from "../../../models/comics";
import BottomNavbar from "./BottomNavbar";
import MangaChapters from "./MangaChapters";
import MangaDetailsSection from "./MangaDetailsSection";
import RecommendedMangas from "./RecommendedMangas";

export default function BottomNavigationSection({
  topData,
}: {
  topData: IComic;
}) {
  const [active, setActive] = useState("details");

  const footer = document.getElementById("footer");

  if (footer) {
    footer.className = "hidden";
  }

  return (
    <div className="flex flex-col w-full">
      <BottomNavbar active={active} setActive={setActive} />
      <button className="self-start bg-emerald-700 rounded-md p-2 mx-4 my-8 gap-1 flex flex-nowrap items-center justify-around">
        Start Reading <GiRead />
      </button>
      {active === "details" && <MangaDetailsSection topData={topData} />}
      {active === "chapters" && <MangaChapters comic={topData.comic} />}
      {active === "recommended" && <RecommendedMangas comic={topData.comic} />}
    </div>
  );
}
