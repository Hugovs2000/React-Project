import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getChapterByHid } from "../../api/api-services";
import { Route } from "../../routes/read.$manga.$chapter.lazy";
import checkImage from "../../utils/check-image-exists";
import convertToUrl from "../../utils/convert-image-string";
import BottomNavChaptersBar from "./components/BottomNavChaptersBar";
import ReadPageSkeleton from "./components/Skeletons/ReadPageSkeleton";
import TopInfoBar from "./components/TopInfoBar";

export default function ReadMangaPage() {
  const { manga, chapter } = Route.useParams();

  const { data: chapterData, isLoading: loadingChapter } = useQuery({
    queryKey: [`getChapter`, chapter],
    queryFn: () => getChapterByHid(chapter),
  });

  if (loadingChapter) {
    return <ReadPageSkeleton manga={manga} />;
  }

  if (
    !(
      chapterData?.chapter?.chap?.[0] ||
      chapterData?.chapter?.md_images?.[0]?.b2key
    )
  ) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Chapter Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  const request = checkImage(chapterData.chapter?.md_images?.[0]?.b2key ?? "");

  if (request?.status === 404) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Images For Chapter Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className=" bg-zinc-800 h-full text-slate-50 flex flex-col items-center">
      <TopInfoBar manga={manga} chapterData={chapterData} />
      <div className="min-h-9 md:min-h-10"></div>
      {chapterData?.chapter.md_images?.map((item) => (
        <LazyLoadImage
          src={convertToUrl(item.b2key)}
          alt=""
          key={item.name}
          className="md:max-w-md"
        />
      ))}
      <BottomNavChaptersBar manga={manga} chapterData={chapterData} />
      <div className="min-h-9 md:min-h-10min-h-10"></div>
    </div>
  );
}
