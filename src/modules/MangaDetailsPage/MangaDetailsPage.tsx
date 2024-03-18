import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getComicBySlug, getComicChapters } from "../../api/api-services";
import { Route } from "../../routes/details.$manga";
import BottomNavigationSection from "./components/BottomNavigationSection";
import MangaHeader from "./components/MangaHeader";
import MangaDetailsSkeleton from "./components/Skeletons/MangaDetailsSkeleton";

function MangaDetailsPage() {
  const { manga } = Route.useParams();

  const { data: topData, isLoading: loadingComic } = useQuery({
    queryKey: [`getComic`, manga],
    queryFn: () => getComicBySlug(manga),
  });

  const { data: comicChaptersData, isLoading: loadingChapters } = useQuery({
    queryKey: [`getComicChapters`, topData?.comic?.hid],
    queryFn: () => getComicChapters(topData!.comic?.hid!, 1),
    enabled: !!topData,
  });

  if (loadingComic || loadingChapters) {
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
    ) ||
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

  const footer = document.getElementById("footer");

  if (footer) {
    footer.className = "hidden";
  }

  return (
    <div className=" bg-zinc-800 h-fit text-slate-50 flex flex-col">
      <MangaHeader topData={topData} />
      <BottomNavigationSection
        comicChaptersData={comicChaptersData!}
        topData={topData}
      />
      <div className="min-h-16 bottom-0 w-full"></div>
    </div>
  );
}

export default MangaDetailsPage;
