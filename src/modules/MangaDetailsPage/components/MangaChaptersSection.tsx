import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { GiRead } from "react-icons/gi";
import { Comic } from "../../../models/comics";
import { getComicChapters } from "../../../services/api-services";
import ChaptersSkeleton from "./Skeletons/ChaptersSkeleton";

export default function MangaChaptersSection({ comic }: { comic: Comic }) {
  const { data: comicChaptersData, isLoading: loadingChapters } = useQuery({
    queryKey: [`getComicChapters`, comic.slug],
    queryFn: () => getComicChapters(comic.hid),
  });

  if (loadingChapters) {
    return <ChaptersSkeleton />;
  }

  if (
    !(
      comicChaptersData?.chapters?.[0]?.chap ||
      comicChaptersData?.chapters?.[0]?.group_name?.[0]
    )
  ) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Manga Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  const chapters = comicChaptersData.chapters?.filter(
    (item) =>
      item.group_name?.[0] === comicChaptersData.chapters[0].group_name?.[0]
  );

  return (
    <>
      <button className="self-start bg-emerald-700 rounded-md p-2 m-4 gap-1 flex flex-nowrap items-center justify-around">
        Start Reading <GiRead />
      </button>
      <div className="carousel carousel-center max-w-full m-4 space-x-6">
        {chapters.map((item) => (
          <div
            className="carousel-item gap-4 flex flex-col justify-center items-between rounded-lg bg-zinc-700 p-2"
            key={item.hid}>
            <div className="m-1">Chapter {item.chap}</div>
            <div className="m-1 flex items-center justify-around">
              <div className="flex flex-col items-center">
                <AiFillLike />
                {item.up_count}
              </div>
              <div className="flex flex-col items-center">
                <AiFillDislike />
                {item.down_count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
