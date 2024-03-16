import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Route } from "../../routes/read.$chapter";
import { getChapterByHid } from "../../services/api-services";
import checkImage from "../../services/check-image-exists";
import convertToUrl from "../../services/convert-image-string";

export default function ReadMangaPage() {
  const { chapter } = Route.useParams();

  const { data: chapterData, isLoading: loadingChapter } = useQuery({
    queryKey: [`getChapter`, chapter],
    queryFn: () => getChapterByHid(chapter),
  });

  if (loadingChapter) {
    return (
      <div className="  h-full bg-gradient-to-r from-gray-700 to-gray-600 flex flex-col"></div>
    );
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

  const request = checkImage(chapterData.chapter.md_images[0].b2key);

  if (request?.status === 404) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Chapter Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className=" bg-zinc-800 h-full text-slate-50 flex flex-col items-center">
      {chapterData?.chapter.md_images.map((item) => (
        <img
          src={convertToUrl(item.b2key)}
          alt=""
          key={item.name}
          className="md:max-w-md"
        />
      ))}
    </div>
  );
}
