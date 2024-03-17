import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/comics";
import { getComicChapters } from "../../../services/api-services";
import RecommendedCard from "./RecommendedCard";
import ChaptersSkeleton from "./Skeletons/ChaptersSkeleton";

export default function RecommendedMangas({ comic }: { comic: Comic }) {
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

  return (
    <>
      <div className="w-full flex flex-wrap justify-around mb-4 px-8 gap-8">
        {comic.recommendations.map((recom) =>
          recom.relates.md_covers.map((cover) => (
            <Link
              to="/details/$manga"
              params={{
                manga: recom.relates.slug,
              }}
              key={recom.relates.title}>
              <RecommendedCard recom={recom} cover={cover} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
