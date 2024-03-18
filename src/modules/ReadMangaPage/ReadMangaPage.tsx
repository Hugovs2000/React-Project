import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RiArrowGoBackLine } from "react-icons/ri";
import { getChapterByHid } from "../../api/api-services";
import { Route } from "../../routes/read.$manga.$chapter";
import checkImage from "../../utils/check-image-exists";
import convertToUrl from "../../utils/convert-image-string";

export default function ReadMangaPage() {
  const { manga, chapter } = Route.useParams();

  const { data: chapterData, isLoading: loadingChapter } = useQuery({
    queryKey: [`getChapter`, chapter],
    queryFn: () => getChapterByHid(chapter),
  });

  if (loadingChapter) {
    return (
      <div className="h-full bg-gradient-to-r from-gray-700 to-gray-600 flex flex-col"></div>
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

  const request = checkImage(chapterData.chapter?.md_images?.[0]?.b2key!);

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

  const footer = document.getElementById("footer");

  if (footer) {
    footer.className = "hidden";
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
          {chapterData.chapter.md_comics?.title}
        </div>
        <div className=" text-center ">Chapter {chapterData.chapter.chap}</div>
      </div>
      <div className="min-h-9 md:min-h-10"></div>
      <div className="z-[1] h-10 fixed bottom-0 p-2 w-full flex justify-around md:justify-center md:gap-20 items-center bg-emerald-700 rounded-t-md">
        {chapterData.prev && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.prev.hid!,
            }}
            className="min-w-24 flex justify-end items-center gap-2">
            <GrPrevious /> Prev
          </Link>
        )}
        {chapterData.next && (
          <Link
            to="/read/$manga/$chapter"
            params={{
              manga: manga,
              chapter: chapterData.next.hid!,
            }}
            className="min-w-24 flex justify-start items-center gap-2">
            Next <GrNext />
          </Link>
        )}
      </div>
      {chapterData?.chapter.md_images?.map((item) => (
        <img
          src={convertToUrl(item.b2key)}
          alt=""
          key={item.name}
          className="md:max-w-md"
        />
      ))}
      <div className="min-h-9 md:min-h-10min-h-10"></div>
    </div>
  );
}
