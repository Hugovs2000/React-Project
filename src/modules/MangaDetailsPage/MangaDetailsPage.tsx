import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicBySlug } from "../../api/api-services";
import { Route } from "../../routes/details.$manga.lazy";
import BottomNavigationSection from "./components/BottomNavigationSection";
import MangaHeader from "./components/MangaHeader";
import MangaDetailsSkeleton from "./components/Skeletons/MangaDetailsSkeleton";

export default function MangaDetailsPage() {
  const { manga } = Route.useParams();

  const { data: topData, isLoading: loadingComic } = useQuery({
    queryKey: [`getComic`, manga],
    queryFn: () => getComicBySlug(manga),
  });

  if (loadingComic) {
    return <MangaDetailsSkeleton />;
  }

  if (
    !(
      topData?.authors?.[0]?.name ||
      topData?.comic?.follow_count ||
      topData?.comic?.last_chapter ||
      topData?.comic?.title ||
      topData?.comic?.hid ||
      topData?.comic?.md_comic_md_genres?.[0]?.md_genres?.name ||
      topData?.comic?.md_covers?.[0]?.b2key ||
      topData?.comic?.desc ||
      topData?.comic?.user_follow_count
    )
  ) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="m-4">Manga Not Found. Return Home</div>
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
      </div>
    );
  }
  return (
    <div className="flex h-fit flex-col bg-zinc-800 text-slate-50">
      <MangaHeader topData={topData} />
      <BottomNavigationSection
        topData={topData}
      />
      <div className="bottom-0 min-h-16 w-full"></div>
    </div>
  );
}
