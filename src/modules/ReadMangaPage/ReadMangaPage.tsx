import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Route } from "../../routes/read.$manga.$chapter";
import { getChapterByHid } from "../../services/api-services";
import checkImage from "../../services/check-image-exists";
import convertToUrl from "../../services/convert-image-string";

export default function ReadMangaPage() {
  const { manga, chapter } = Route.useParams();

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
      <div className="z-[1] h-10 fixed top-16 p-2 w-full flex justify-center gap-8 items-center bg-emerald-700 rounded-b-md">
        <div className="absolute left-0 mx-4 h-fit">
          <Link
            to="/details/$manga"
            params={{
              manga: manga,
            }}
            className="h-full">
            <RiArrowGoBackLine className="scale-125" />
          </Link>
        </div>
        <div className="ml-2 text-ellipsis text-nowrap overflow-hidden max-w-40 md:max-w-96">
          {chapterData.chapter.md_comics.title}
        </div>
        <div className=" text-center ">Chapter {chapterData.chapter.chap}</div>
      </div>
      <div className="min-h-9"></div>
      <div className="z-[1] h-10 fixed bottom-0 p-2 w-full flex justify-around items-center bg-emerald-700 rounded-t-md">
        {chapterData.prev && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.prev.hid,
            }}
            className="h-full flex justify-center items-center gap-2">
            <GrPrevious /> Previous
          </Link>
        )}
        {chapterData.next && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.next.hid,
            }}
            className="h-full flex justify-center items-center gap-2">
            Next <GrNext />
          </Link>
        )}
      </div>
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
