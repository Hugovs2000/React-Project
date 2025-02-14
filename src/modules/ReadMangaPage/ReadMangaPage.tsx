import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getChapterByHid } from "../../api/api-services";
import { Route } from "../../routes/read.$manga.$chapter.lazy";
import { useMangaStore } from "../../state/state-service";
import convertToUrl from "../../utils/convert-image-string";
import BottomNavChaptersBar from "./components/BottomNavChaptersBar";
import ReadPageSkeleton from "./components/Skeletons/ReadPageSkeleton";
import TopInfoBar from "./components/TopInfoBar";
import checkIfImageExists from "../../utils/check-image-exists";
import { updateUser } from "../../firestore/firestore";

export default function ReadMangaPage() {
  const { manga, chapter } = Route.useParams();
  const setLastReadManga = useMangaStore((state) => state.setLastRead);
  const addCurrentlyReading = useMangaStore(
    (state) => state.addCurrentlyReading,
  );
  const [isShown, setIsShown] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [imgValid, setImgValid] = useState(false);
  const imgContainerHeight =
    document.getElementById("img-container")?.clientHeight;

  const { data: chapterData, isLoading: loadingChapter } = useQuery({
    queryKey: [`getChapter`, chapter],
    queryFn: () => getChapterByHid(chapter),
  });

  const handleScroll = () => {
    const position = window.scrollY;
    if (
      imgContainerHeight &&
      (position < 1000 || position >= imgContainerHeight - 1000)
    ) {
      if (!isShown) {
        setIsShown(true);
      }
    } else {
      if (isShown) {
        setIsShown(false);
      }
    }
  };

  const handleClick = () => {
    if (!isShown) {
      setIsShown(true);
      const id = setTimeout(() => {
        setIsShown(false);
      }, 3000);
      setTimeoutId(id);
    } else {
      setIsShown(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };

  useEffect(() => {
    if (
      manga !== "" &&
      chapter !== "" &&
      chapterData?.chapter?.md_comics?.title
    ) {
      setLastReadManga(manga, chapter);
      addCurrentlyReading(manga, chapter, chapterData.chapter.md_comics.title);
      updateUser();
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, [manga, chapter, setLastReadManga, isShown, timeoutId]);

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

  checkIfImageExists(chapterData.chapter?.md_images?.[0]?.b2key ?? "").then(
    (imageExists) => {
      imageExists ? setImgValid(true) : setImgValid(false);
    },
  );

  if (!imgValid) {
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
      <BottomNavChaptersBar
        manga={manga}
        chapterData={chapterData}
        isHidden={!isShown}
      />
    </div>
  );
}
