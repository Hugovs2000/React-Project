import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getChapterByHid } from "../../api/api-services";
import { Route } from "../../routes/read.$manga.$chapter.lazy";
import { useMangaStore } from "../../state/state-service";
import checkImage from "../../utils/check-image-exists";
import convertToUrl from "../../utils/convert-image-string";
import BottomNavChaptersBar from "./components/BottomNavChaptersBar";
import ReadPageSkeleton from "./components/Skeletons/ReadPageSkeleton";
import TopInfoBar from "./components/TopInfoBar";

export default function ReadMangaPage() {
  const { manga, chapter } = Route.useParams();
  const setCurrentlyReading = useMangaStore((state) => state.setLastRead);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { data: chapterData, isLoading: loadingChapter } = useQuery({
    queryKey: [`getChapter`, chapter],
    queryFn: () => getChapterByHid(chapter),
  });

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    setCurrentlyReading(manga, chapter);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [manga, chapter, setCurrentlyReading]);

  const imgContainerHeight =
    document.getElementById("img-container")?.clientHeight;

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
      <div className="flex flex-col items-center justify-center">
        <div className="m-4">Chapter Not Found. Return Home</div>
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
      </div>
    );
  }

  const request = checkImage(chapterData.chapter?.md_images?.[0]?.b2key ?? "");

  if (request?.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="m-4">Images For Chapter Not Found. Return Home</div>
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full flex-col items-center bg-zinc-800 text-slate-50"
      id="img-container"
    >
      <TopInfoBar manga={manga} chapterData={chapterData} />
      <div className="min-h-9 md:min-h-10"></div>
      {chapterData?.chapter.md_images?.map((item) => (
        <LazyLoadImage
          src={convertToUrl(item.b2key)}
          alt="chapter cover"
          key={item.name}
          className="md:w-1/2"
        />
      ))}
      (
      <BottomNavChaptersBar
        manga={manga}
        chapterData={chapterData}
        isHidden={
          scrollPosition <= 100 ||
          scrollPosition >= (imgContainerHeight ?? 0) - 1000
            ? false
            : true
        }
      />
      )
    </div>
  );
}
