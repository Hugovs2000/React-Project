import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { GiRead } from "react-icons/gi";
import { IComicChapters } from "../../../models/comicChapters";
import { IComic } from "../../../models/comics";
import BottomNavbar from "./BottomNavbar";
import MangaChapters from "./MangaChapters";
import MangaDetailsSection from "./MangaDetailsSection";
import RecommendedMangas from "./RecommendedMangas";

export default function BottomNavigationSection({
  topData,
  comicChaptersData,
}: {
  topData: IComic;
  comicChaptersData: IComicChapters;
}) {
  const [active, setActive] = useState("details");

  return (
    <div className="flex flex-col w-full">
      <BottomNavbar active={active} setActive={setActive} />
      <div className="w-full flex justify-between">
        <Link
          to="/read/$manga/$chapter"
          params={{
            manga: topData.comic.slug,
            chapter: topData.firstChap.hid,
          }}
          className="w-fit">
          <div className="self-start bg-emerald-700 rounded-md p-2 mx-4 my-8 gap-1 flex flex-nowrap items-center justify-around">
            Start Reading <GiRead />
          </div>
        </Link>
        {active === "chapters" && (
          <button className="m-4 text-blue-400">See more</button>
        )}
      </div>
      {active === "details" && <MangaDetailsSection topData={topData} />}
      {active === "chapters" && (
        <MangaChapters
          comic={topData.comic}
          comicChaptersData={comicChaptersData}
        />
      )}
      {active === "recommended" && <RecommendedMangas comic={topData.comic} />}
    </div>
  );
}
