import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicChapters } from "../../../api/api-services";
import { Comic } from "../../../models/Comic";
import Chapter from "./Chapter";
import ChaptersSkeleton from "./Skeletons/ChaptersSkeleton";

export default function MangaChapters({ comic }: { comic: Comic }) {
  const { data: comicChaptersData, isLoading: loadingChapters } = useQuery({
    queryKey: [`getComicChapters`, comic.slug],
    queryFn: () => getComicChapters(comic.hid!), //This has been checked but TypeScript has a known issue https://github.com/microsoft/TypeScript/issues/45097
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
      item.group_name?.[0] === comicChaptersData.chapters?.[0]?.group_name?.[0]
  );

  return (
    <>
      <div className="w-full flex flex-col items-start md:items-center mb-4 px-4 space-y-6">
        {chapters.map((chap) => (
          <Chapter chap={chap} key={chap.hid} />
        ))}
      </div>
    </>
  );
}
