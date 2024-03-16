import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Route } from "../../routes/details.$manga";
import { getComicBySlug } from "../../services/api-services";
import MangaChaptersSection from "./components/MangaChaptersSection";
import MangaDescription from "./components/MangaDescription";
import MangaHeader from "./components/MangaHeader";
import MangaDetailsSkeleton from "./components/Skeletons/MangaDetailsSkeleton";

function MangaDetailsPage() {
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
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Manga Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className=" bg-zinc-800 h-full text-slate-50 flex flex-col">
      <MangaHeader topData={topData} />
      <MangaDescription topData={topData} />
      <MangaChaptersSection comic={topData.comic} />
    </div>
  );
}

export default MangaDetailsPage;
